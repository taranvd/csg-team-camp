import React from 'react';
import { Button, Dialog } from '@blueprintjs/core';
import { styles } from './todo-modal.styled';

interface ModalFormProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

const ModalForm: React.FC<ModalFormProps> = ({
	isOpen,
	onClose,
	title,
	children,
}) => {
	return (
		<Dialog isOpen={isOpen} onClose={onClose} className={styles.modal}>
			<div className={styles.title}>
				<h3>{title}</h3>
			</div>
			<div>{children}</div>
			<div className={styles.buttonContainer}>
				<Button onClick={onClose}>Cancel</Button>
			</div>
		</Dialog>
	);
};

export default ModalForm;
