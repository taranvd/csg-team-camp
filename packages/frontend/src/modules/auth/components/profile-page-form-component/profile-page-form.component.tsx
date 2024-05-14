import React from 'react';
import { Form } from 'react-final-form';
import { Button } from '@blueprintjs/core';

import FormGroups from '~shared/components/form-groups-user/form-groups.components';
import { ProfileForm, ProfilePageFormProps } from './profile-page-form.types';
import { validateProfileForm } from '~/utils/validate';

const ProfilePageForm: React.FC<ProfilePageFormProps> = ({ onSubmit }) => {
	const registerFields = [
		{ name: 'name', label: 'Name' },
		{ name: 'email', label: 'Email' },
	];

	const handleSubmit = async (values: ProfileForm): Promise<void> => {
		onSubmit(values);
	};

	return (
		<Form
			onSubmit={handleSubmit}
			validate={validateProfileForm}
			render={({ handleSubmit }) => (
				<>
					<FormGroups fields={registerFields} />

					<Button
						onClick={handleSubmit}
						type="submit"
						intent="primary"
					>
						Submit
					</Button>
				</>
			)}
		/>
	);
};

export default ProfilePageForm;
