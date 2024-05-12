import React from 'react';
import RegisterForm from '~modules/auth/components/register-form-component/register-form.component';
import useUserStore from '~store/user.store';
import { IRegisterForm } from './register-page.types';
import { styles } from './register-page.styled';

const RegisterPage: React.FC = () => {
	const { register } = useUserStore();

	const handleSubmit = async (values: IRegisterForm): Promise<void> => {
		try {
			await register(values);
		} catch (error) {
			console.error('Registration error:', error);
		}
	};

	return (
		<div>
			<h1 className={styles.title}>Register</h1>
			<RegisterForm onSubmit={handleSubmit} />
		</div>
	);
};

export default RegisterPage;
