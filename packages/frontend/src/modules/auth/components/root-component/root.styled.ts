import { Colors } from '@blueprintjs/core';
import { css } from '@emotion/css';
import { THEME } from '~shared/themes';

export const styles = {
	container: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: ${THEME.sizes.margins.enormous};
	`,

	title: css`
		margin-bottom: ${THEME.sizes.margins.bigest};
	`,

	link: css`
		padding: ${THEME.sizes.paddings.medium} ${THEME.sizes.paddings.normal};
		border-radius: ${THEME.borderRadius.small};
		background-color: ${Colors.LIGHT_GRAY2};
	`,

	resetLink: css`
		color: ${Colors.BLUE3};
		padding: ${THEME.sizes.paddings.tiny} ${THEME.sizes.paddings.normal};
	`,
};
