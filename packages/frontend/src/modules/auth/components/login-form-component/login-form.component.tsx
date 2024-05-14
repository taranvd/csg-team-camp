import React from 'react';
import { Form } from 'react-final-form';
import { Button } from '@blueprintjs/core';

import FormGroups from '~shared/components/form-groups-user/form-groups.components';
import { Link, useLocation } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { styles } from './login-form.styled';
import { ILoginForm, LoginFormProps } from './login-form.types';
import { validateLoginForm } from '~/utils/validate';

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
	const location = useLocation();

	const loginFields = [
		{ name: 'email', label: 'Email' },
		{ name: 'password', label: 'Password', type: 'password' },
	];

	const handleSubmit = (values: ILoginForm): void => {
		onSubmit(values);
	};

	const backLinkHref = location.state?.from ?? ROUTER_KEYS.ROOT;

	return (
		<Form
			validate={validateLoginForm}
			onSubmit={handleSubmit}
			render={({ handleSubmit }) => (
				<>
					<FormGroups fields={loginFields} />

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

export default LoginForm;
