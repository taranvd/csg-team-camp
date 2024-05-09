import { Colors } from '@blueprintjs/core';
import { css } from '@emotion/css';
import { THEME } from '~shared/themes';
import { MEDIA_QUERIES } from '~shared/themes/mediaQueries.theme';

export const stylesWrapper = css`
	display: flex;
	flex-direction: column;
	gap: ${THEME.sizes.paddings.medium};
	padding: ${THEME.sizes.paddings.medium};

	border: 1px solid ${Colors.GRAY5};

	${MEDIA_QUERIES.tablet} {
		width: 60vw;
		height: 35vw;
		min-width: 200px;
		min-height: 200px;
		justify-content: space-between;
	}
`;

export const stylesDesc = css`
	overflow: scroll;
`;

export const stylesActionsWrapper = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
