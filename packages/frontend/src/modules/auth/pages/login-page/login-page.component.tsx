import React from 'react';

import LoginForm from '~modules/auth/components/login-form-component/login-form.component';
import { ILoginForm } from '~modules/auth/components/login-form-component/login-form.types';
import useUserStore from '~store/user.store';

const LoginPage: React.FC = () => {
	const { login } = useUserStore();

	const handleSubmit = async (values: ILoginForm): Promise<void> => {
		await login(values);
	};

	return (
		<div>
			<LoginForm onSubmit={handleSubmit} />
		</div>
	);
};

export default LoginPage;
