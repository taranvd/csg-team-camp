import React from 'react';
import { Field } from 'react-final-form';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import styles from './form-groups.styled';

const FormGroups: React.FC = () => {
	return (
		<div>
			<FormGroup label="Title" className={styles.formGroup}>
				<Field name="title">
					{({ input }) => (
						<InputGroup
							{...input}
							placeholder="Enter title"
							autoFocus
							autoComplete="off"
							required
							className={styles.input}
						/>
					)}
				</Field>
			</FormGroup>
			<FormGroup label="Description" className={styles.formGroup}>
				<Field name="description">
					{({ input }) => (
						<InputGroup
							{...input}
							placeholder="Enter description"
							className={styles.input}
						/>
					)}
				</Field>
			</FormGroup>
		</div>
	);
};

export default FormGroups;
