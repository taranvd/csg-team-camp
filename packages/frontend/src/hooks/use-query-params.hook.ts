import { useSearchParams } from 'react-router-dom';

type QueryParamsHook = {
	search: string;
	status: string;
	changeStatus: (newStatus: string) => void;
	changeSearch: (newQuery: string) => void;
	resetSearch: () => void;
};

export const useQueryParams = (): QueryParamsHook => {
	const [searchParams, setSearchParams] = useSearchParams();

	const search = searchParams.get('search') ?? '';
	const status = searchParams.get('status') ?? 'all';

	const changeSearch = (newQuery: string): void =>
		setSearchParams({ search: newQuery, status });

	const changeStatus = (newStatus: string): void =>
		setSearchParams({ status: newStatus, search });

	const resetSearch = (): void => setSearchParams({});

	return {
		search,
		status,
		changeSearch,
		resetSearch,
		changeStatus,
	};
};
