import React from 'react';
import { Navigate } from 'react-router-dom';
import { PrivateRoute } from '~modules/auth/components/private-route-component/private-route.component';
import { RestrictedRoute } from '~modules/auth/components/restricted-route-component/restricted-route.component';
import ChangePasswordPage from '~modules/auth/pages/change-password-page/change-password-page.component';
import ForgotPassowrdPage from '~modules/auth/pages/forgot-password-page/forgot-password-page.component';
import LoginPage from '~modules/auth/pages/login-page/login-page.component';
import ProfilePage from '~modules/auth/pages/profile-page/profile-page.component';
import RegisterPage from '~modules/auth/pages/register-page/register-page.component';
import ResetPasswordPage from '~modules/auth/pages/reset-password-page/reset-password-page.component';
import RootPage from '~modules/auth/pages/root-page/root-page.component';
import AuthLayout from '~modules/common/pages/auth-layout/auth-layout.component';
import ErrorPage from '~modules/common/pages/error/error-page.component';
import Layout from '~modules/common/pages/layout/layout.component';
import NotFoundPage from '~modules/common/pages/not-found/not-found.component';
import TodoPage from '~modules/todo/pages/todo/todo-page.component';
import TodosPage from '~modules/todo/pages/todos/todos-page.component';
import { ROUTER_KEYS } from '~shared/keys';

export const publicRoutes = [
	{
		element: <AuthLayout />,
		children: [
			{
				path: ROUTER_KEYS.ROOT,
				element: <RootPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: ROUTER_KEYS.REGISTER,
				element: (
					<RestrictedRoute
						redirectTo={ROUTER_KEYS.LOGIN}
						component={<RegisterPage />}
					/>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: ROUTER_KEYS.LOGIN,
				element: (
					<RestrictedRoute
						redirectTo={ROUTER_KEYS.TODOS}
						component={<LoginPage />}
					/>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: ROUTER_KEYS.FORGET_PASSWORD,
				element: <ForgotPassowrdPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: ROUTER_KEYS.RESET_PASSWORD,
				element: <ResetPasswordPage />,
				errorElement: <ErrorPage />,
			},
		],
	},
];

export const privateRoutes = [
	{
		element: <Layout />,
		children: [
			{
				path: ROUTER_KEYS.TODOS,
				element: (
					<PrivateRoute
						redirectTo={ROUTER_KEYS.LOGIN}
						component={<TodosPage />}
					/>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: `${ROUTER_KEYS.TODOS}/:id`,
				element: (
					<PrivateRoute
						redirectTo={ROUTER_KEYS.LOGIN}
						component={<TodoPage />}
					/>
				),
				errorElement: <ErrorPage />,
			},

			{
				path: ROUTER_KEYS.LOGOUT,
				element: <Navigate to={ROUTER_KEYS.ROOT} />,
				errorElement: <ErrorPage />,
			},
			{
				path: ROUTER_KEYS.PROFILE,
				element: (
					<PrivateRoute
						redirectTo={ROUTER_KEYS.LOGIN}
						component={<ProfilePage />}
					/>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: ROUTER_KEYS.CHANGE_PASSWORD,
				element: (
					<PrivateRoute
						redirectTo={ROUTER_KEYS.LOGIN}
						component={<ChangePasswordPage />}
					/>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: ROUTER_KEYS.ALL_MATCH,
				element: <NotFoundPage />,
			},
		],
	},
];
