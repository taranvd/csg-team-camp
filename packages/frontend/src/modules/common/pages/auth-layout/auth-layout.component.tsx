import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { container } from './auth-layout.styled';

const AuthLayout: React.FC = () => {
	return (
		<>
			<main>
				<div className={container}>
					<Suspense fallback="null">
						<Outlet />
					</Suspense>
				</div>
			</main>
		</>
	);
};

export default AuthLayout;
