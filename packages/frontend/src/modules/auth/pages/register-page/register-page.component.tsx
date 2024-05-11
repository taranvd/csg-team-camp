import React, { useEffect } from 'react';
import RegisterForm from '~modules/auth/components/register-form-component/register-form.component';
import useUserStore from '~store/user.store';
import { IRegisterForm } from './register-page.types';
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

const RegisterPage: React.FC = () => {
	const { register, isRegister } = useUserStore();
	const navigate = useNavigate();

	useEffect(() => {
		if (isRegister) {
			navigate(ROUTER_KEYS.LOGIN);
		}
	}, [isRegister]);

	const handleSubmit = async (values: IRegisterForm): Promise<void> => {
		try {
			await register(values);
		} catch (error) {
			console.error('Registration error:', error);
		}
	};

	return (
		<>
			<RegisterForm onSubmit={handleSubmit} />
		</>
	);
};

export default RegisterPage;
