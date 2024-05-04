export interface Todo {
	id: string;
	title: string;
	description: string;
	completed: boolean;
	isPrivate: boolean;
	createdAt: Date;
	updatedAt: Date;
}
