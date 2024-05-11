import { css } from '@emotion/css';
import { THEME } from '~shared/themes';

export const container = css`
	padding-left: ${THEME.sizes.paddings.large};
	padding-right: ${THEME.sizes.paddings.large};
	margin: 0 auto;
	margin-top: 20vh;
	max-width: ${THEME.sizes.width.normal};
`;
