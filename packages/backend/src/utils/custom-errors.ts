class CustomErrors extends Error {
	statusCode: number;
	constructor(statusCode: number, message: string) {
		super(message);
		this.statusCode = statusCode;
	}
}

class NotAuthorizedError extends Error {
	statusCode: number;
	constructor(message: string) {
		super(message);
		this.statusCode = 401;
	}
}
class ConflictError extends Error {
	statusCode: number;
	constructor(message: string) {
		super(message);
		this.statusCode = 409;
	}
}
class NotFoundError extends Error {
	statusCode: number;
	constructor(message: string = 'Not found.') {
		super(message);
		this.statusCode = 404;
	}
}

class BadRequestError extends Error {
	statusCode: number;
	constructor(message: string = 'Bad Request') {
		super(message);
		this.statusCode = 400;
	}
}

export {
	CustomErrors,
	NotAuthorizedError,
	ConflictError,
	NotFoundError,
	BadRequestError,
};
