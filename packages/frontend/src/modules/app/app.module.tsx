import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PortalProvider } from '@blueprintjs/core';
import { Toaster } from 'react-hot-toast';

import Router from '~router/router';

import '~/shared/themes/global-styles.css';
import useTodoStore from '~store/todos.store';

const App = (): React.ReactNode => {
	const { getAllTodos } = useTodoStore();

	useEffect(() => {
		getAllTodos();
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
