import { css } from '@emotion/css';
import { THEME } from '~shared/themes';

export const stylesContaiiner = css`
	display: flex;
	flex-direction: column;
	gap: 15px;
	margin-top: ${THEME.sizes.margins.large};
`;
