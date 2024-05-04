import React from 'react';
import Layout from '~modules/generic/layout/layout.component';
import TodosPage from '~modules/todo/pages/todos/todos-page.component';
import { ROUTER_KEYS } from '~shared/keys';

export const routes = [
	{
		element: <Layout />,
		children: [
			{
				path: ROUTER_KEYS.TODOS,
				element: <TodosPage />,
			},
		],
	},
];
