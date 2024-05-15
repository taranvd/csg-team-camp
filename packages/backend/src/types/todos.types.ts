export type TodoType = {
	id: string;
	title: string;
	description: string;
	completed: boolean;
	isPrivate: boolean;
	createdAt: Date;
	updatedAt: Date;
};

export enum STATUSES_KEYS {
	ALL = 'all',
	PRIVATE = 'private',
	PUBLIC = 'public',
	COMPLETED = 'completed',
}
