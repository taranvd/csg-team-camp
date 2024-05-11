import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '~shared/components/container';
import Header from '~shared/components/header/header.component';

const Layout: React.FC = () => {
	return (
		<>
			<Header />
			<main>
				<Container>
					<Suspense fallback="null">
						<Outlet />
					</Suspense>
				</Container>
			</main>
		</>
	);
};

export default Layout;
