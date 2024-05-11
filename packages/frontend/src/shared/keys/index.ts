export const enum ROUTER_KEYS {
	ROOT = '/',
	ALL_MATCH = '/*',
	TODOS = '/todos',
	LOGIN = '/login',
	LOGOUT = '/logout',
	REGISTER = '/register',
	PROFILE = '/profile',
	FORGET_PASSWORD = '/forgot-password',
	RESET_PASSWORD = '/reset-password',
	CHANGE_PASSWORD = '/change-password',
}
export enum STATUSES_KEYS {
	ALL = 'all',
	PRIVATE = 'private',
	PUBLIC = 'public',
	COMPLETED = 'completed',
}

export const STORAGE_KEYS = Object.freeze({
	TOKEN: 'TOKEN',
});
