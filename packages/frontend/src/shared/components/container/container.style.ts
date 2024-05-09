import { css } from '@emotion/css';
import { THEME } from '~shared/themes';
import { MEDIA_QUERIES } from '~shared/themes/mediaQueries.theme';

export const container = css`
	padding-left: ${THEME.sizes.paddings.large};
	padding-right: ${THEME.sizes.paddings.large};
	margin: 0 auto;
	max-width: ${THEME.sizes.maxWidth.mobile};

	${MEDIA_QUERIES.tablet} {
		padding-left: ${THEME.sizes.paddings.huge};
		padding-right: ${THEME.sizes.paddings.huge};
		max-width: ${THEME.sizes.maxWidth.tablet};
	}

	${MEDIA_QUERIES.desktop} {
		padding-left: ${THEME.sizes.paddings.enormous};
		padding-right: ${THEME.sizes.paddings.enormous};
		max-width: ${THEME.sizes.maxWidth.desktop};
	}
`;
