import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PortalProvider } from '@blueprintjs/core';
import { Toaster } from 'react-hot-toast';

import Router from '~router/router';
import useTodoStore from '~store/todos.store';

import '~/shared/themes/global-styles.css';

const App = (): React.ReactNode => {
	const fetchTodos = useTodoStore();

	useEffect(() => {
		fetchTodos.getAllTodos();
	}, []);

	return (
		<PortalProvider portalClassName="my-custom-class">
			<BrowserRouter>
				<Router />
				<Toaster />
			</BrowserRouter>
		</PortalProvider>
	);
};

export default App;
