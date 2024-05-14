import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { styles } from './root.styled';

const Root: React.FC = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Todos App</h1>
			<NavLink className={styles.link} to={ROUTER_KEYS.LOGIN}>
				Login
			</NavLink>
			<NavLink className={styles.link} to={ROUTER_KEYS.REGISTER}>
				Register
			</NavLink>
			<NavLink
				className={styles.resetLink}
				to={ROUTER_KEYS.FORGET_PASSWORD}
			>
				Forgot password?
			</NavLink>
		</div>
	);
};

export default Root;
