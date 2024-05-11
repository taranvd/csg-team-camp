export interface Todo {
	ownerId: string;
	id: string;
	title: string;
	description: string;
	completed: boolean;
	isPrivate: boolean;
}
