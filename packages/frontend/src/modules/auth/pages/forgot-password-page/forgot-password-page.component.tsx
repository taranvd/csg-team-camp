import React from 'react';
import ForgotPasswordForm from '~modules/auth/components/forgot-password-form-component/forgot-password-form.component';
import useUserStore from '~store/user.store';

const ForgotPasswordPage: React.FC = () => {
	const { forgotPassword } = useUserStore();

	const handleSubmit = async (values: {
		email: string;
		newPassword: string;
	}): Promise<void> => {
		try {
			await forgotPassword(values.email);
		} catch (error) {
			console.error('Forgot password error:', error);
		}
	};

	return (
		<div>
			<h2>Forgot Password</h2>
			<ForgotPasswordForm onSubmit={handleSubmit} />
		</div>
	);
};

export default ForgotPasswordPage;
