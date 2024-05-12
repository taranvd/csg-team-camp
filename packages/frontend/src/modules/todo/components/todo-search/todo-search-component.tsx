import React from 'react';
import { InputGroup, Button } from '@blueprintjs/core';
import { useQueryParams } from '~/hooks/use-query-params.hook';
import { styles } from './todo-search-component.styled';

const TodoSearch: React.FC = () => {
	const { search, changeSearch, resetSearch } = useQueryParams();

	const handleClear = (): void => {
		resetSearch();
	};

	const handleChange = (e): void => {
		if (e.target.value === '') {
			resetSearch();
		}

		changeSearch(e.target.value);
	};

	return (
		<div className={styles.container}>
			<InputGroup type="search" value={search} onChange={handleChange} />
			<Button onClick={handleClear}>Clear</Button>
		</div>
	);
};

export default TodoSearch;
