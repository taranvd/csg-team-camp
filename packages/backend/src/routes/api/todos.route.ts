import { todoController } from '@/controllers';
import { Router } from 'express';
import { createTodoSchema, updateTodoSchema } from '@/schemas/todo.schema';
import { isExist, tryCatch, validateBody } from '@/middleware';
import findTodoById from '@/utils/findTodoById';

const todosRouter: Router = Router();

todosRouter.get('/', tryCatch(todoController.getAllTodo.bind(todoController)));
todosRouter.get(
	'/:id',
	isExist(findTodoById),
	tryCatch(todoController.getTodoById.bind(todoController)),
);
todosRouter.post(
	'/',
	validateBody(createTodoSchema),
	tryCatch(todoController.createTodo.bind(todoController)),
);
todosRouter.put(
	'/:id',
	isExist(findTodoById),
	validateBody(updateTodoSchema),
	tryCatch(todoController.updateTodo.bind(todoController)),
);
todosRouter.delete(
	'/:id',
	isExist(findTodoById),
	tryCatch(todoController.deleteTodo.bind(todoController)),
);

export default todosRouter;
