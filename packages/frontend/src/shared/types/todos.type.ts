export interface ITodo {
	id: string;
	title: string;
	description: string;
	isPrivate: boolean;
	completed: boolean;
}

export interface ITodoCreate {
	title: string;
	description: string;
}
