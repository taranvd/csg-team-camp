import React from 'react';
import { ROUTER_KEYS } from '~shared/keys';
import useUserStore from '~store/user.store';
import { Navigate } from 'react-router-dom';
import { PrivateRouteProps } from './private-route.types';

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
	component: Component,
	redirectTo = ROUTER_KEYS.ROOT,
}) => {
	const { isAuthenticated, isLoading } = useUserStore();
	const shouldRedirect = !isLoading && !isAuthenticated;
	return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
