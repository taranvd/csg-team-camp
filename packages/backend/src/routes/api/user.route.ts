import userController from '@/controllers/user/user.controller';
import { tryCatch, validateBody } from '@/middleware';
import { auth } from '@/middleware/auth.middleware';
import {
	changePasswordSchema,
	resetPasswordSchema,
} from '@/schemas/user.schema';
import { loginSchema, registerSchema } from '@/schemas/user.schema';
import { Router } from 'express';

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
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
	auth,
	tryCatch(userController.current.bind(userController)),
);

router.put(
	'/current',
	auth,
	validateBody(registerSchema),
	tryCatch(userController.current.bind(userController)),
);

router.post(
	'/logout',
	auth,
	tryCatch(userController.logout.bind(userController)),
);

router.get(
	'/verify/:token',
	tryCatch(userController.verify.bind(userController)),
);

router.post(
	'/change-password',
	auth,
	validateBody(changePasswordSchema),
	tryCatch(userController.changePassword.bind(userController)),
);

router.post(
	'/forgot-password',
	userController.forgotPassword.bind(userController),
);

router.post(
	'/reset-password',
	validateBody(resetPasswordSchema),
	userController.resetPassword.bind(userController),
);

export default router;
