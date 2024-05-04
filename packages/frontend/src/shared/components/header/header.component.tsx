import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../container/container.component';
import { stylesHeader, stylesLink, stylesList } from './header.styles';

const Header: FC = () => {
	return (
		<header className={stylesHeader}>
			<Container>
				<nav>
					<ul className={stylesList}>
						<li>
							<NavLink
								className={stylesLink}
								to={'todos/'}
								title="Todo list"
							>
								Todo list
							</NavLink>
						</li>
						<li>
							<NavLink className={stylesLink} to={'profile/'}>
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
