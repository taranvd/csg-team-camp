import { Colors } from '@blueprintjs/core';
import { css } from '@emotion/css';
import { THEME } from '~shared/themes';

export const styles = {
	container: css`
		text-align: center;
		margin-top: ${THEME.sizes.paddings.bigest};
	`,
	title: css`
		font-size: ${THEME.fonst.sizes.extra};
		margin-bottom: ${THEME.sizes.margins.huge};
	`,
	paragraph: css`
		margin-bottom: ${THEME.sizes.margins.huge};
	`,
	link: css`
		color: ${Colors.BLUE4};
	`,
};
