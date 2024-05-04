import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PortalProvider } from '@blueprintjs/core';
import '~/shared/themes/global-styles.css';
import Router from '~router/router';
import useTodoStore from '~store/todos.store';

const App = (): React.ReactNode => {
	const fetchTodos = useTodoStore();

	useEffect(() => {
		fetchTodos.getAllTodos();
	}, []);

	return (
		<PortalProvider portalClassName="my-custom-class">
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</PortalProvider>
	);
};

export default App;
