import React from 'react';
import { InputErrorProps } from './input-error.types';
import { styles } from './inpute-error.styled';

const InputError: React.FC<InputErrorProps> = ({ meta }) => {
	return meta.error && meta.touched ? (
		<span className={styles.span}>{meta.error}</span>
	) : null;
};

export default InputError;
