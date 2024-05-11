import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../container/container.component';
import { stylesHeader, stylesLink, stylesList } from './header.styles';
import { ROUTER_KEYS } from '~shared/keys';
import useUserStore from '~store/user.store';
import { Button } from '@blueprintjs/core';
const Header: FC = () => {
	const { logout } = useUserStore();

	return (
		<header className={stylesHeader}>
			<Container>
				<nav>
					<ul className={stylesList}>
						<li>
							<NavLink
								className={stylesLink}
								to={ROUTER_KEYS.TODOS}
								title="Todo list"
							>
								Todo list
							</NavLink>
						</li>
						<li>
							<NavLink
								className={stylesLink}
								to={'profile/'}
								title="My profile"
							>
								My profile
							</NavLink>
						</li>
						<li>
							<NavLink to={ROUTER_KEYS.LOGOUT}>
								<Button onClick={async () => logout()}>
									Logout
								</Button>
							</NavLink>
						</li>
					</ul>
				</nav>
			</Container>
		</header>
	);
};

export default Header;
