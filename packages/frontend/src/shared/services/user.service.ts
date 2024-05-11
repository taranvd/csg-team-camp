import { IUser } from '~shared/types/user.type';
import HttpService from './http.service';

export interface User {
	user: IUser;
	id: string;
	name: string;
	email: string;
	token: string;
}

export interface RegisterParams {
	name?: string;
	email: string;
	password: string;
}

export interface LoginParams {
	email: string;
	password: string;
}

export interface UpdateUserParams {
	name?: string;
	email?: string;
}

class UserService extends HttpService {
	constructor() {
		super();
	}

	async register(params: RegisterParams): Promise<User> {
		const response = await this.post<User>({
			url: 'user/register',
			data: params,
		});
		return response;
	}

	async login(params: LoginParams): Promise<User> {
		const response = await this.post<User>({
			url: 'user/login',
			data: params,
		});
		return response;
	}

	async getCurrentUser(): Promise<User> {
		const response = await this.get<User>({ url: 'user/current' });
		return response;
	}

	async updateCurrentUser(params: UpdateUserParams): Promise<User> {
		const response = await this.put<User>({
			url: 'user/current',
			data: params,
		});

		return response;
	}

	async logout(): Promise<void> {
		await this.post<void>({ url: 'user/logout' });
	}

	async verify(token: string): Promise<void> {
		await this.get<void>({ url: `user/verify/${token}` });
	}

	async changePassword(
		oldPassword: string,
		newPassword: string,
	): Promise<void> {
		await this.post<void>({
			url: 'user/change-password',
			data: { oldPassword, newPassword },
		});
	}

	async forgotPassword(email: string): Promise<void> {
		await this.post<void>({
			url: 'user/forgot-password',
			data: { email },
		});
	}

	async resetPassword(
		resetToken: string,
		newPassword: string,
	): Promise<void> {
		await this.post<void>({
			url: 'user/reset-password',
			data: { resetToken, newPassword },
		});
	}
}

const userService = new UserService();
export default userService;
