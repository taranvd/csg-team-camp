import { Colors } from '@blueprintjs/core';
import { css } from '@emotion/css';
import { THEME } from '~shared/themes';
import { MEDIA_QUERIES } from '~shared/themes/mediaQueries.theme';

export const stylesHeader = css`
	background-color: ${Colors.GRAY5};
	margin-bottom: ${THEME.sizes.margins.bigest};
	padding: ${THEME.sizes.paddings.medium} 0;
	box-shadow: ${THEME.shadows.small};
`;

export const stylesList = css`
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > li:last-child {
		margin-left: 10px;
	}

	${MEDIA_QUERIES.tablet} {
		justify-content: end;

		& > li:first-child {
			display: none;
		}
	}
`;

export const stylesLink = css`
	padding: ${THEME.sizes.paddings.small};
	font-weight: ${THEME.fontWeights.medium};
	border-radius: ${THEME.borderRadius.small};
	color: ${Colors.BLACK};
	background-color: ${Colors.WHITE};

	&:active {
		opacity: 0.5;
	}

	${MEDIA_QUERIES.desktop} {
		&:hover {
			opacity: 0.5;
		}
	}
`;

export const styledLinkLogout = css`
	background-color: ${Colors.RED3} !important;
	color: ${Colors.WHITE} !important;
	border-radius: ${THEME.borderRadius.small};
`;
