import React from 'react';
import { Field } from 'react-final-form';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import styles from './form-groups.styled';

const FormGroups: React.FC = () => {
	return (
		<>
			<FormGroup label="Title" className={styles.formGroup}>
				<Field name="title">
					{({ input, meta }) => (
						<>
							<InputGroup
								{...input}
								placeholder="Enter title"
								autoFocus
								autoComplete="off"
								required
								className={styles.input}
							/>
							<InputError meta={meta} />
						</>
					)}
				</Field>
			</FormGroup>
			<FormGroup label="Description" className={styles.formGroup}>
				<Field name="description">
					{({ input, meta }) => (
						<>
							<InputGroup
								{...input}
								placeholder="Enter description"
								className={styles.input}
							/>
							<InputError meta={meta} />
						</>
					)}
				</Field>
			</FormGroup>
		</>
	);
};

export default FormGroups;
