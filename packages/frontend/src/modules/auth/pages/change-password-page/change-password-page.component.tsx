import React from 'react';
import ChangePasswordForm from '~modules/auth/components/change-password-form-component.tsx/change-password-form-component';
import { ChangePasswordFormValues } from '~modules/auth/components/change-password-form-component.tsx/change-password-form.types';
import useUserStore from '~store/user.store';
import { styles } from './change-password-page.styled';

const ChangePasswordPage: React.FC = () => {
	const { changePassword } = useUserStore();

	const handleSubmit = async (
		values: ChangePasswordFormValues,
	): Promise<void> => {
		try {
			await changePassword(values.oldPassword, values.newPassword);
		} catch (error) {
			console.error('Error change password: ', error);
		}
	};

	return (
		<div className={styles.container}>
			<h1>Change Password</h1>
			<ChangePasswordForm onSubmit={handleSubmit} />
		</div>
	);
};

export default ChangePasswordPage;
