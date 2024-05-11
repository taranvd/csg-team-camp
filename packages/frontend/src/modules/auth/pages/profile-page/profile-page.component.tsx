import { Button } from '@blueprintjs/core';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProfilePageForm from '~modules/auth/components/profile-page-form-component/profile-page-form.component';
import { ProfileForm } from '~modules/auth/components/profile-page-form-component/profile-page-form.types';
import ModalForm from '~shared/components/modal/modal.component';
import { ROUTER_KEYS } from '~shared/keys';
import useUserStore from '~store/user.store';

const ProfilePage: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { user, getCurrentUser, updateCurrentUser } = useUserStore();
	const location = useLocation();
	const backLinkHref = location.state?.from ?? ROUTER_KEYS.TODOS;

	useEffect(() => {
		getCurrentUser();
	}, []);

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
	};
	const handleSubmit = async (values: ProfileForm): Promise<void> => {
		try {
			await updateCurrentUser(values);

			closeModal();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h1>Hello, {user ? user.name : 'unknow'}</h1>

			<p>Name: {user.name}</p>
			<p>Email: {user.email}</p>

			<Button onClick={openModal}>Edit profile</Button>

			<ModalForm
				isOpen={isModalOpen}
				onClose={closeModal}
				title="Edit profile"
			>
				<ProfilePageForm onSubmit={handleSubmit} />
			</ModalForm>

			<Link to={backLinkHref}>
				<Button type="button" intent="primary">
					Back
				</Button>
			</Link>

			<Link to={ROUTER_KEYS.CHANGE_PASSWORD}>Change password</Link>
		</div>
	);
};
export default ProfilePage;
