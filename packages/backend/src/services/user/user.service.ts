import prisma from '@/db/database';
import { IUserCreate, IUserLogin, IUserUpdate } from '@/types/user.types';
import {
	BadRequestError,
	ConflictError,
	NotAuthorizedError,
	NotFoundError,
} from '@/utils/custom-errors';

import { User } from '@prisma/client';

import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';
import JWTService from '../jwt-service/jwt.service';
import { mailService } from '../mail-service/mail.service';

export default class UserService {
	constructor(private jwtService: JWTService) {}

	async register(data: IUserCreate): Promise<User> {
		const user = await this.findOne(data.email);

		if (user) {
			throw new ConflictError('User already exist');
		}

		const passwordHash = await bcrypt.hash(data.password, 10);
		const verifyToken = randomUUID();

		mailService.sendVerificationEmail(data.email, verifyToken);

		const newUser = await prisma.user.create({
			data: {
				...data,
				password: passwordHash,
				verifyToken,
			},
		});

		return newUser;
	}

	async login(data: IUserLogin): Promise<User> {
		const { email, password } = data;
		const user = await this.findOne(email);

		if (!user) {
			throw new ConflictError('Email or password is wrong');
		}

		const passwordCompare = await bcrypt.compare(password, user.password);

		if (!passwordCompare) {
			throw new ConflictError('Email or password is wrong');
		}

		if (user.verify !== true) {
			throw new NotAuthorizedError('Your account is not verify');
		}

		user.token = this.jwtService.generateToken(user);

		await prisma.user.update({
			where: {
				id: user.id,
			},
			data: {
				token: user.token,
			},
		});

		return user;
	}

	async logout(id: string): Promise<void> {
		const user = await this.findById(id);

		if (!user) {
			throw new NotAuthorizedError('Not authorized');
		}

		await prisma.user.update({
			where: { id: user.id },
			data: { token: '' },
		});
	}

	async verify(verifyToken: string): Promise<void> {
		const user = await prisma.user.findFirst({
			where: {
				verifyToken,
				verify: false,
			},
		});

		if (!user) {
			throw new NotFoundError();
		}

		await this.updateUser(user.id, {
			verify: true,
			verifyToken: '',
		});
	}

	async updateUser(id: string, data: IUserUpdate): Promise<User> {
		return await prisma.user.update({ where: { id }, data });
	}

	async findByEmail(email: string): Promise<void> {
		const existUser = await prisma.user.findFirst({ where: { email } });

		if (existUser) {
			throw new BadRequestError('Email is already exist');
		}
	}

	async changePassword(
		id: string,
		oldPassword: string,
		newPassword: string,
	): Promise<void> {
		const user = await this.findById(id);

		if (!user) throw new NotFoundError('User not found');

		const passwordCompare = await bcrypt.compare(
			oldPassword,
			user.password,
		);

		if (!passwordCompare)
			throw new ConflictError('Old password is incorrect');

		const newPasswordHash = await bcrypt.hash(newPassword, 10);

		await prisma.user.update({
			where: {
				id: user.id,
			},
			data: { password: newPasswordHash },
		});
	}

	async sendPasswordResetEmail(email: string): Promise<void> {
		const user = await this.findOne(email);

		if (!user) throw new NotFoundError('User not found');

		const resetToken = this.jwtService.generateToken(user, '1h');

		await this.updateUser(user.id, {
			token: resetToken,
		});

		await mailService.sendPasswordResetEmail(email, resetToken, user.id);
	}

	async resetPassword(
		resetToken: string,
		newPassword: string,
	): Promise<void> {
		const payload = this.jwtService.verifyToken(resetToken);

		if (!payload || !payload.id) {
			throw new BadRequestError('Invalid reset token');
		}

		await prisma.user.update({
			where: { id: payload.id },
			data: { password: await bcrypt.hash(newPassword, 10) },
		});
	}

	async findOne(email: string): Promise<User | null> {
		const user = await prisma.user.findUnique({ where: { email } });
		return user;
	}

	async findById(id: string): Promise<User | null> {
		const user = await prisma.user.findUnique({ where: { id } });

		return user;
	}
}
