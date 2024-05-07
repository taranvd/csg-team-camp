import { css } from '@emotion/css';
import { THEME } from '~shared/themes';
import { MEDIA_QUERIES } from '~shared/themes/mediaQueries.theme';

const styles = {
	form: css`
		max-width: ${THEME.sizes.maxWidth.mobile};
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
		padding: ${THEME.sizes.paddings.normal};
		border: 1px solid #ccc;
		border-radius: ${THEME.borderRadius.medium};
		font-size: ${THEME.fonst.sizes.medium};
		&:focus {
			outline: none;
			border-color: #007bff;
		}
	`,
	button: css`
		background-color: #007bff;
		color: white;
		border: none;
		padding: ${THEME.sizes.paddings.medium};
		border-radius: ${THEME.borderRadius.medium};
		cursor: pointer;
		font-size: ${THEME.fonst.sizes.medium};

		&:hover {
			background-color: #0056b3;
		}
	`,
};

export default styles;
