import React from 'react';
import { Form } from 'react-final-form';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';

import FormGroups from '~shared/components/form-groups-user/form-groups.components';
import { ROUTER_KEYS } from '~shared/keys';
import { styles } from './register-form.styled';
import { RegisterFormProps } from './register-form.types';
import { validateRegisterForm } from '~/utils/validate';

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
	const location = useLocation();

	const registerFields = [
		{ name: 'name', label: 'Name' },
		{ name: 'email', label: 'Email' },
		{ name: 'password', label: 'Password', type: 'password' },
	];

	const backLinkHref = location.state?.from ?? ROUTER_KEYS.ROOT;

	return (
		<Form
			onSubmit={onSubmit}
			validate={validateRegisterForm}
			render={({ handleSubmit }) => (
				<>
					<FormGroups fields={registerFields} />

					<div className={styles.btnContainer}>
						<Link to={backLinkHref}>
							<Button type="button" intent="primary">
								Back
							</Button>
						</Link>
						<Button
							onClick={handleSubmit}
							type="submit"
							intent="primary"
						>
							Submit
						</Button>
					</div>
				</>
			)}
		/>
	);
};

export default RegisterForm;
