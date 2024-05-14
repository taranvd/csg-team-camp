import React from 'react';
import { ROUTER_KEYS } from '~shared/keys';
import { RestrictedRouteProps } from './restricted-route.types';
import useUserStore from '~store/user.store';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
	component: Component,
	redirectTo = ROUTER_KEYS.ROOT,
}) => {
	const { isAuthenticated } = useUserStore();

	return isAuthenticated ? <Navigate to={redirectTo} /> : Component;
};
