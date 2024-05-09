import * as React from 'react';
import { useRoutes } from 'react-router-dom';

import { routes } from './routes';

const Router: React.FunctionComponent = () => {
	return useRoutes(routes);
};

export default Router;
