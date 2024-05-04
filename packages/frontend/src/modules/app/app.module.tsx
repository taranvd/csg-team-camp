import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PortalProvider } from '@blueprintjs/core';
import '~/shared/themes/global-styles.css';
import Router from '~router/router';

const App = (): React.ReactNode => {
	return (
		<PortalProvider portalClassName="my-custom-class">
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</PortalProvider>
	);
};

export default App;
