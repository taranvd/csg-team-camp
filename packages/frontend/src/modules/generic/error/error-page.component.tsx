import React from 'react';
import { useRouteError } from 'react-router-dom';

import { ErrorPageProps, RouteError } from './error-page.types';
import { styles } from './error-page.styled';

const ErrorPage: React.FC<ErrorPageProps> = ({
	fallbackMessage = 'An unexpected error has occurred.',
}) => {
	const error = useRouteError() as RouteError | null;

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Oops!</h1>

			<p className={styles.message}>{fallbackMessage}</p>

			{error && (
				<p className={styles.error}>
					<i>{error.statusText || error.message}</i>
				</p>
			)}
		</div>
	);
};

export default ErrorPage;
