import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
const { SECRET_KEY } = process.env;

interface JWTPayload {
	id: string;
	email: string;
}

export default class JWTService {
	private readonly secretKey: string;

	constructor() {
		this.secretKey = SECRET_KEY;
	}

	generateToken(user: User, expiresIn: string = '24h'): string {
		const payload: JWTPayload = { id: user.id, email: user.email };
		return jwt.sign(payload, this.secretKey, { expiresIn });
	}

	verifyToken(token: string): JWTPayload {
		return jwt.verify(token, this.secretKey) as JWTPayload;
	}
}
