import React from 'react';
import { Navigate } from 'react-router-dom';
import ErrorPage from '~modules/generic/error/error-page.component';
import Layout from '~modules/generic/layout/layout.component';
import NotFoundPage from '~modules/generic/not-found/not-found.component';
import TodosPage from '~modules/todo/pages/todos/todos-page.component';
import { ROUTER_KEYS } from '~shared/keys';

export const routes = [
	{
		element: <Layout />,
		children: [
			{
				path: ROUTER_KEYS.TODOS,
				element: <TodosPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: ROUTER_KEYS.ROOT,
				element: <Navigate to={ROUTER_KEYS.TODOS} />,
			},
			{
				path: ROUTER_KEYS.ALL_MATCH,
				element: <NotFoundPage />,
			},
		],
	},
];
