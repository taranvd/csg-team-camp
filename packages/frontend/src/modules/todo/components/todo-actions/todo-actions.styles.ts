import { Colors } from '@blueprintjs/core';
import { css } from '@emotion/css';
import { THEME } from '~shared/themes';

export const styledContainer = css`
	display: flex;
	align-items: center;
	gap: ${THEME.sizes.paddings.medium};
`;

export const styledBtn = css`
	display: flex;
	align-items: center;
	padding: ${THEME.sizes.paddings.small} ${THEME.sizes.paddings.large};
	border: none;
	background-color: ${Colors.GRAY5};
	border-radius: ${THEME.borderRadius.small};
`;
