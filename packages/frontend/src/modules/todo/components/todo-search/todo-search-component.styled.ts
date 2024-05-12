import { css } from '@emotion/css';
import { THEME } from '~shared/themes';

export const styles = {
	container: css`
		display: flex;
		gap: ${THEME.sizes.margins.medium};
		margin-bottom: ${THEME.sizes.margins.large};
	`,
};
