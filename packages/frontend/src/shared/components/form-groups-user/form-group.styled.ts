import { Colors } from '@blueprintjs/core';
import { css } from '@emotion/css';
import { THEME } from '~shared/themes';
import { MEDIA_QUERIES } from '~shared/themes/mediaQueries.theme';

const styles = {
	form: css`
		max-width: ${THEME.sizes.width.normal};
		margin: 0 auto;
		padding: ${THEME.sizes.paddings.medium};

		${MEDIA_QUERIES.tablet} {
			max-width: ${THEME.sizes.maxWidth.tablet};
		}

		${MEDIA_QUERIES.desktop} {
			max-width: ${THEME.sizes.maxWidth.desktop};
		}
	`,
	formGroup: css`
		margin-bottom: ${THEME.sizes.margins.large};
	`,
	input: css`
		width: 100%;
		border-radius: ${THEME.borderRadius.medium};
		font-size: ${THEME.fonst.sizes.medium};
		&:focus {
			outline: none;
			border-color: ${Colors.BLUE1};
		}
	`,
	button: css`
		background-color: ${Colors.BLUE1};
		color: white;
		border: none;
		padding: ${THEME.sizes.paddings.medium};
		border-radius: ${THEME.borderRadius.medium};
		cursor: pointer;
		font-size: ${THEME.fonst.sizes.medium};

		&:hover {
			background-color: ${Colors.BLUE2};
		}
	`,
	error: css`
		color: ${Colors.RED1};
		font-size: ${THEME.fonst.sizes.small};
	`,
};

export default styles;
