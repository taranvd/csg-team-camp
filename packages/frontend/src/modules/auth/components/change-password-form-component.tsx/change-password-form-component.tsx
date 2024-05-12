import { Button } from '@blueprintjs/core';
import React from 'react';
import { Form } from 'react-final-form';
import { Link, useLocation } from 'react-router-dom';
import { validateChangePasswordForm } from '~/utils/validate';
import {
	ChangePasswordFormProps,
	ChangePasswordFormValues,
} from '~modules/auth/components/change-password-form-component.tsx/change-password-form.types';
import FormGroups from '~shared/components/form-groups-user/form-groups.components';
import { ROUTER_KEYS } from '~shared/keys';
import { styles } from './change-password-form.styled';

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
	onSubmit,
}) => {
	const location = useLocation();
	const backLinkHref = location.state?.from ?? ROUTER_KEYS.PROFILE;

	const changePasswordField = [
		{ name: 'oldPassword', label: 'Old password', type: 'password' },
		{ name: 'newPassword', label: 'New Password', type: 'password' },
	];

	const handleSubmit = async (
		values: ChangePasswordFormValues,
	): Promise<void> => {
		onSubmit(values);
	};

	return (
		<Form
			onSubmit={handleSubmit}
			validate={validateChangePasswordForm}
			render={({ handleSubmit }) => (
				<>
					<FormGroups fields={changePasswordField} />

					<div className={styles.container}>
						<Button
							onClick={handleSubmit}
							type="submit"
							intent="primary"
						>
							Submit
						</Button>
						<Link to={backLinkHref}>
							<Button type="button" intent="primary">
								Back
							</Button>
						</Link>
					</div>
				</>
			)}
		/>
	);
};

export default ChangePasswordForm;
