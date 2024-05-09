import { User } from '@prisma/client';

export interface IUserCreate {
	name: string;
	email: string;
	password: string;
}

export type IUserLogin = Omit<IUserCreate, 'name'>;

export type IUserUpdate = Partial<User>;
