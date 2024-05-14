import userController from '@/controllers/user/user.controller';
import { tryCatch, validateBody } from '@/middleware';
import { authorizeUser } from '@/middleware/auth.middleware';
import {
	changePasswordSchema,
	resetPasswordSchema,
	updateCurrentSchema,
} from '@/schemas/user.schema';
import { loginSchema, registerSchema } from '@/schemas/user.schema';
import { Router } from 'express';

const router: Router = Router();

router.post(
	'/register',
	validateBody(registerSchema),
	tryCatch(userController.register.bind(userController)),
);

router.post(
	'/login',
	validateBody(loginSchema),
	tryCatch(userController.login.bind(userController)),
);

router.get(
	'/current',
	authorizeUser,
	tryCatch(userController.current.bind(userController)),
);

router.put(
	'/current',
	authorizeUser,
	validateBody(updateCurrentSchema),
	tryCatch(userController.updateCurrent.bind(userController)),
);

router.post(
	'/logout',
	authorizeUser,
	tryCatch(userController.logout.bind(userController)),
);

router.get(
	'/verify/:token',
	tryCatch(userController.verify.bind(userController)),
);

router.post(
	'/change-password',
	authorizeUser,
	validateBody(changePasswordSchema),
	tryCatch(userController.changePassword.bind(userController)),
);

router.post(
	'/forgot-password',
	tryCatch(userController.forgotPassword.bind(userController)),
);

router.post(
	'/reset-password',
	validateBody(resetPasswordSchema),
	userController.resetPassword.bind(userController),
);

export default router;
