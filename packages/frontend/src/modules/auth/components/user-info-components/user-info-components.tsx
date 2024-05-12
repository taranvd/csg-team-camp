import React from 'react';
import { User } from './user-info.types';
import { styles } from './user-info-components.styled';

const UserInfo: React.FC<{ user?: User }> = ({ user }) => {
	return (
		<div className={styles.container}>
			<h1>Hello, {user ? user.name : 'Anon 👀'}</h1>

			{user && (
				<>
					<p>
						<b>Name:</b> {user.name}
					</p>
					<p>
						<b>Email:</b> {user.email}
					</p>
				</>
			)}
		</div>
	);
};

export default UserInfo;
