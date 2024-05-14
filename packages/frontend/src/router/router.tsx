import React, { useMemo } from 'react';
import { useRoutes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import useUserStore from '~store/user.store';

const Router: React.FC = () => {
	const { isAuthenticated } = useUserStore();

	const allRoutes = useMemo(() => {
		return [...publicRoutes, ...privateRoutes];
	}, [privateRoutes, publicRoutes]);

	const routes = isAuthenticated ? allRoutes : publicRoutes;

	return useRoutes(routes);
};

export default Router;
