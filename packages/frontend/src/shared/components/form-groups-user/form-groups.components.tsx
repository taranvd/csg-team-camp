// form-groups.component.tsx
import React from 'react';
import { Field } from 'react-final-form';
import { FormGroup, InputGroup } from '@blueprintjs/core';

import InputError from '../input-error/input-error.component';
import styles from './form-group.styled';
import { FormGroupsProps } from './form-goups.types';

const FormGroups: React.FC<FormGroupsProps> = ({ fields }) => {
	return (
		<div>
			{fields.map((field) => (
				<FormGroup
					key={field.name}
					label={field.label}
					className={styles.formGroup}
				>
					<Field name={field.name}>
						{({ input, meta }) => (
							<>
								<InputGroup
									{...input}
									placeholder={`Enter ${field.label.toLowerCase()}`}
									type={field.type || 'text'}
									className={styles.input}
								/>
								<InputError meta={meta} />
							</>
						)}
					</Field>
				</FormGroup>
			))}
		</div>
	);
};

export default FormGroups;
