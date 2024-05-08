import React from 'react';
import { useRouteError } from 'react-router-dom';
import { ErrorPageProps, RouteError } from './error-page.types';

const ErrorPage: React.FC<ErrorPageProps> = ({
	fallbackMessage = 'An unexpected error has occurred.',
}) => {
	const error = useRouteError() as RouteError | null;

	return (
		<section id="error-page" className="section">
			<div className="container">
				<h1>Oops!</h1>

				<p>{fallbackMessage}</p>

				{error && (
					<p>
						<i>{error.statusText || error.message}</i>
					</p>
				)}
			</div>
		</section>
	);
};

export default ErrorPage;
