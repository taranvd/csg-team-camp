import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { styles } from './not-found.styled';

const NotFoundPage: React.FC = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>404 Not Found</h1>

			<p className={styles.paragraph}>
				The page you're looking for doesn't exist.
			</p>

			<p className={styles.paragraph}>
				Go back to
				<Link to={ROUTER_KEYS.ROOT} className={styles.link}>
					home page
				</Link>
			</p>
		</div>
	);
};

export default NotFoundPage;
