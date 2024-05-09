import { todoController } from '@/controllers';
import { Router } from 'express';
import { createTodoSchema, updateTodoSchema } from '@/schemas/todo.schema';
import { isExist, tryCatch, validateBody } from '@/middleware';
import { auth } from '@/middleware/auth.middleware';

const todosRouter: Router = Router();

todosRouter.get('/', tryCatch(todoController.getAllTodo.bind(todoController)));
todosRouter.get(
	'/:id',
	isExist('todo'),
	tryCatch(todoController.getById.bind(todoController)),
);
todosRouter.post(
	'/',
	auth,
	validateBody(createTodoSchema),
	tryCatch(todoController.createTodo.bind(todoController)),
);
todosRouter.put(
	'/:id',
	auth,
	isExist('todo'),
	validateBody(updateTodoSchema),
	tryCatch(todoController.updateTodo.bind(todoController)),
);
todosRouter.delete(
	'/:id',
	auth,
	isExist('todo'),
	tryCatch(todoController.deleteTodo.bind(todoController)),
);

export default todosRouter;
