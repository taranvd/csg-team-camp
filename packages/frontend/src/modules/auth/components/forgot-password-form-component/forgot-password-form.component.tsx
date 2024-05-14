import { Button } from '@blueprintjs/core';
import React from 'react';
import { Form } from 'react-final-form';
import FormGroups from '~shared/components/form-groups-user/form-groups.components';
import useUserStore from '~store/user.store';
import { ForgotPasswordFormProps } from './forgot-password-form.types';
import { Link, useLocation } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { styles } from './forgot-password-form.styled';

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
	onSubmit,
}) => {
	const location = useLocation();
	const { isLoading } = useUserStore();
	const backLinkHref = location.state?.from ?? ROUTER_KEYS.ROOT;
	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit }) => (
				<>
					<FormGroups
						fields={[
							{
								name: 'email',
								label: 'Email',
								type: 'email',
							},
						]}
					/>
					<div className={styles.container}>
						<Button
							onClick={handleSubmit}
							type="submit"
							loading={isLoading}
						>
							Reset Password
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

export default ForgotPasswordForm;
