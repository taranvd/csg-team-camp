import React from 'react';
import MatchMedia from 'react-responsive';

import TodoDesktop from '~modules/todo/components/todo-desktop/todo-desktop.component';
import TodoMobile from '~modules/todo/components/todo-mobile/todo-mobile.component';
import TodoTablet from '~modules/todo/components/todo-tablet/todo-tablet.component';

import { MEDIA_QUERIES_ALT } from '~shared/themes/mediaQueries.theme';

const TodosPage: React.FC = () => {
	return (
		<section>
			<MatchMedia minWidth={MEDIA_QUERIES_ALT.desktop.minWidth}>
				{(matches) => (matches ? <TodoDesktop /> : null)}
			</MatchMedia>
			<MatchMedia
				minWidth={MEDIA_QUERIES_ALT.tablet.minWidth}
				maxWidth={MEDIA_QUERIES_ALT.tablet.maxWidth}
			>
				{(matches) => (matches ? <TodoTablet /> : null)}
			</MatchMedia>
			<MatchMedia maxWidth={MEDIA_QUERIES_ALT.mobile.maxWidth}>
				{(matches) => (matches ? <TodoMobile /> : null)}
			</MatchMedia>
		</section>
	);
};

export default TodosPage;
