export const MEDIA_QUERIES = {
	desktop: '@media (min-width: 1024px)',
	tablet: '@media (min-width: 768px)',
	mobile: '@media (max-width: 767px)',
};

export const MEDIA_QUERIES_ALT = {
	desktop: { minWidth: 1024 },
	tablet: { minWidth: 768, maxWidth: 1023 },
	mobile: { maxWidth: 767 },
};
