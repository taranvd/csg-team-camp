import React from 'react';
import { Link } from 'react-router-dom';
import Container from '~shared/components/container/container.component';

const NotFoundPage: React.FC = () => {
	return (
		<section id="not-found-page" className="section">
			<Container>
				<h1>404 Not Found</h1>

				<p>The page you're looking for doesn't exist.</p>

				<p>
					Go back to <Link to="/">home page</Link>.
				</p>
			</Container>
		</section>
	);
};

export default NotFoundPage;
