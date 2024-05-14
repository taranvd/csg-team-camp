import { ITodo } from './todos.type';

export interface IUser {
	email: string;
	id?: string;
	name?: string;
	createdAt?: string;
	updatedAt?: string;
	todos?: ITodo[];
}

export interface IUserRegister {
	name: string;
	email: string;
	password: string;
}

export type IUserLogin = Omit<IUserRegister, 'name'>;

export type IResetPasswordForm = {
	newPassword: string;
	confirmPassword: string;
};

export type IUserProfile = {
	name: string;
	email: string;
};

export type IUserChangePassword = {
	oldPassword: string;
	newPassword: string;
};
