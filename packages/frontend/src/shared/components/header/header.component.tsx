import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../container/container.component';
import { stylesHeader, stylesLink, stylesList } from './header.styles';
import { ROUTER_KEYS } from '~shared/keys';

const Header: FC = () => {
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
					</ul>
				</nav>
			</Container>
		</header>
	);
};

export default Header;
