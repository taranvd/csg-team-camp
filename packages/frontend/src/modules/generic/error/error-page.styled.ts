import { css } from '@emotion/css';
import { Colors } from '@blueprintjs/core';
import { THEME } from '~shared/themes';

const { fonst, sizes } = THEME;

export const styles = {
	container: css`
		text-align: center;
		margin-top: ${sizes.margins.large};
	`,
	title: css`
		font-size: ${fonst.sizes.large};
		color: ${Colors.BLACK};
		margin-bottom: ${sizes.margins.medium};
	`,
	message: css`
		font-size: ${fonst.sizes.medium};
		color: ${Colors.DARK_GRAY3};
		margin-bottom: ${sizes.margins.medium};
	`,
	error: css`
		font-style: italic;
		color: ${Colors.RED3};
	`,
};
