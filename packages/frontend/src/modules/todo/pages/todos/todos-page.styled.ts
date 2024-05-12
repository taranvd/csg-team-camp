import { css } from '@emotion/css';
import { THEME } from '~shared/themes';
import { MEDIA_QUERIES } from '~shared/themes/mediaQueries.theme';

export const styles = {
	container: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: ${THEME.sizes.margins.large};

		${MEDIA_QUERIES.tablet} {
			flex-direction: row-reverse;
			justify-content: space-between;
			align-items: baseline;
		}
	`,
};
