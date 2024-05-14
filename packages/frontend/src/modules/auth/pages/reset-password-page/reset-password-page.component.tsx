import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ResetPasswordForm from '~modules/auth/components/reset-password-form-component/reset-password-form.component';
import useUserStore from '~store/user.store';
import { ROUTER_KEYS } from '~shared/keys';
import { ResetPassword } from '~modules/auth/components/reset-password-form-component/reset-password-form.types';

const ResetPasswordPage: React.FC = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const token = searchParams.get('token');
	const { resetPassword } = useUserStore();

	const handleSubmit = async (values: ResetPassword): Promise<void> => {
		try {
			await resetPassword(token, values.newPassword);

			navigate(ROUTER_KEYS.LOGIN);
		} catch (error) {
			console.error('Reset password error: ', error);
		}
	};

	return (
		<div>
			<h2>Reset Password</h2>
			<ResetPasswordForm onSubmit={handleSubmit} />
		</div>
	);
};

export default ResetPasswordPage;
