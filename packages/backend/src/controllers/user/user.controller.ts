import JWTService from '@/services/jwt-service/jwt.service';
import UserService from '@/services/user/user.service';
import { User } from '@prisma/client';
import { Request, Response } from 'express';

export class UserController {
	constructor(private userService: UserService) {}

	async register(req: Request, res: Response): Promise<void> {
		const { email } = await this.userService.register(req.body);

		res.status(201).json({
			message:
				'Registration successful. Please check your email for verification.',
			user: { email },
		});
	}

	async login(req: Request, res: Response): Promise<void> {
		const { email, token } = await this.userService.login(req.body);
		res.status(201).json({
			token,
			user: { email },
		});
	}

	async current(req: Request, res: Response): Promise<void> {
		const { token, id, name, email } = req.user as User;

		res.status(200).json({
			id,
			name,
			email,
			token,
		});
	}

	async updateCurrent(req: Request, res: Response): Promise<void> {
		const { id } = req.user as User;
		const { name, email, token } = await this.userService.updateUser(
			id,
			req.body,
		);

		res.status(200).json({
			id,
			name,
			email,
			token,
		});
	}

	async logout(req: Request, res: Response): Promise<void> {
		const { id } = req.user as User;
		await this.userService.logout(id);
		res.status(204).send({
			message: 'Logout success',
		});
	}

	async verify(req: Request, res: Response): Promise<void> {
		const { verifyToken } = req.params;
		await this.userService.verify(verifyToken);

		res.send({ message: 'Verification successful' });
	}

	async changePassword(req: Request, res: Response): Promise<void> {
		const { id } = req.user as User;
		const { oldPassword, newPassword } = req.body;

		await this.userService.changePassword(id, oldPassword, newPassword);

		res.status(200).json({ message: 'Password changed successfully' });
	}

	async forgotPassword(req: Request, res: Response): Promise<void> {
		const { email } = req.body;

		await this.userService.sendPasswordResetEmail(email);
		res.status(200).json({
			message: 'Password reset email has been sent successfully',
		});
	}

	async resetPassword(req: Request, res: Response): Promise<void> {
		const { resetToken, newPassword } = req.body;

		await this.userService.resetPassword(resetToken, newPassword);
		res.status(200).json({ message: 'Password reset successful' });
	}
}

const userController = new UserController(new UserService(new JWTService()));
export default userController;
