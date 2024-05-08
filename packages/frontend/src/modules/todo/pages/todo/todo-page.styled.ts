import { Colors } from '@blueprintjs/core';
import { css } from '@emotion/css';
import { THEME } from '~shared/themes';
import { MEDIA_QUERIES } from '~shared/themes/mediaQueries.theme';

export const stylesTitle = css`
	margin-top: ${THEME.sizes.margins.large};
	margin-bottom: ${THEME.sizes.margins.enormous};
	font-size: ${THEME.fonst.sizes.extra};
`;

export const stylesSubtitle = css`
	display: inline-block;
	margin-bottom: ${THEME.sizes.margins.huge};
	font-size: ${THEME.fonst.sizes.medium};
`;

export const stylesDesc = css`
	display: inline-block;
	margin-bottom: ${THEME.sizes.margins.enormous};
	font-size: ${THEME.fonst.sizes.medium};
`;

export const stylesActionsWrapper = css`
	display: flex;
	padding: 0 ${THEME.sizes.paddings.large};
	justify-content: space-between;
	margin-bottom: ${THEME.sizes.margins.enormous};
`;

export const stylesLink = css`
	display: inline-block;
	padding: ${THEME.sizes.paddings.small} ${THEME.sizes.paddings.medium};
	color: ${Colors.BLACK};
	background-color: ${Colors.GRAY5};
	border-radius: ${THEME.borderRadius.small};

	${MEDIA_QUERIES.desktop} {
		padding: ${THEME.sizes.paddings.small} ${THEME.sizes.paddings.bigest};
	}
`;
