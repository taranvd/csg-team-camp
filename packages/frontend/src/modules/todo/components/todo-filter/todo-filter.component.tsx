import React from 'react';
import { Button, ButtonGroup } from '@blueprintjs/core';
import { STATUSES_KEYS } from '~shared/keys';
import { useQueryParams } from '~/hooks/use-query-params.hook';

const TodoFilter: React.FC = () => {
	const { status, changeStatus } = useQueryParams();
	const statuses = Object.values(STATUSES_KEYS);

	const handleStatusChange = (newStatus: string): void => {
		changeStatus(newStatus);
	};

	return (
		<ButtonGroup>
			{statuses.map((statusKey) => (
				<Button
					key={statusKey}
					active={status === statusKey}
					onClick={() => handleStatusChange(statusKey)}
				>
					{statusKey}
				</Button>
			))}
		</ButtonGroup>
	);
};

export default TodoFilter;
