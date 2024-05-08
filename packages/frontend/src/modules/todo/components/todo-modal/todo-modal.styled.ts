import { css } from '@emotion/css';
import { THEME } from '~shared/themes';

export const styles = {
	modal: css`
		width: ${THEME.sizes.width.normal};
		padding: ${THEME.sizes.paddings.huge};
	`,
	title: css`
		font-size: ${THEME.fonst.sizes.large};
		margin-bottom: ${THEME.sizes.margins.huge};
	`,
	buttonContainer: css`
		display: flex;
		justify-content: flex-end;
		margin-top: ${THEME.sizes.margins.huge};
	`,
};
