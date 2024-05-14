import { Colors } from '@blueprintjs/core';
import { css } from '@emotion/css';
import { THEME } from '~shared/themes';

export const styles = {
	container: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: ${THEME.sizes.margins.huge};
		background-color: ${Colors.LIGHT_GRAY1};
		margin: 0 auto;
		max-width: ${THEME.sizes.maxWidth.mobile};
		padding: ${THEME.sizes.paddings.large};
		border-radius: ${THEME.borderRadius.large};
		box-shadow: ${THEME.shadows.large};
	`,

	link: css`
		color: ${Colors.BLUE3};
	`,
};
