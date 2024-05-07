import { Colors } from '@blueprintjs/core';
import { css } from '@emotion/css';
import { THEME } from '~shared/themes';

const {
	sizes: { paddings },
	fonst: { sizes },
} = THEME;

export const styledColumns = css`
	display: grid;
	grid-template-columns: 2fr 4fr 3fr;
	background-color: ${Colors.GRAY5};
	color: ${Colors.BLACK};
	margin-top: ${THEME.sizes.margins.enormous};

	& > li {
		padding: ${paddings.medium} ${paddings.normal};
	}

	& > li p {
		font-size: ${sizes.small};
		font-weight: ${THEME.fontWeights.bold};
		color: ${Colors.BLACK};
	}
`;

export const styledRows = css`
	height: 55vh;
	overflow: scroll;

	& > li {
		display: grid;
		grid-template-columns: 2fr 4fr 3fr;
		font-size: ${sizes.small};
		line-height: 1.5;

		& > h3,
		& > p {
			padding: ${paddings.medium} ${paddings.normal};
		}

		& > h3 {
			font-weight: ${THEME.fontWeights.medium};
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		& > p {
			font-weight: 300;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}

	& > li:nth-child(2n-1) {
		background-color: ${Colors.LIGHT_GRAY4};
	}

	& > li > :not(:last-child) {
		border-right: 2px solid ${Colors.LIGHT_GRAY1};
	}
`;

export const actionsContainer = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${paddings.medium} ${paddings.normal};
`;
