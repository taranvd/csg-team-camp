import React from 'react';
import { container } from './container.style';
import { ContainerProps } from './container.types';

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className={container}>{children}</div>;
};

export default Container;
