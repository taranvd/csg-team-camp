import React from 'react';
import { Form } from 'react-final-form';
import { Button } from '@blueprintjs/core';
import FormGroups from '~shared/components/form-groups-user/form-groups.components';
import { ResetPasswordFormProps } from './reset-password-form.types';
import { validateResetPasswordForm } from '~/utils/validate';

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ onSubmit }) => {
	return (
		<Form
			onSubmit={onSubmit}
			validate={validateResetPasswordForm}
			render={({ handleSubmit }) => (
				<div>
					<FormGroups
						fields={[
							{
								name: 'newPassword',
								label: 'New Password',
								type: 'password',
							},
							{
								name: 'confirmPassword',
								label: 'Confirm Password',
								type: 'password',
							},
						]}
					/>
					<Button onClick={handleSubmit} type="submit">
						Reset
					</Button>
				</div>
			)}
		/>
	);
};

export default ResetPasswordForm;
