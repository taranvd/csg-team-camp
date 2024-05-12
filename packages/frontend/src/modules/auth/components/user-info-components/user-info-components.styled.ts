import { css } from '@emotion/css';
import { THEME } from '~shared/themes';

export const styles = {
	container: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: ${THEME.sizes.margins.large};
		margin-bottom: ${THEME.sizes.margins.large};
	`,
};
