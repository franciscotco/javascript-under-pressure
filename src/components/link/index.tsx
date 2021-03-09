// Vendors
import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import { Link as Root } from './styles';

interface IProps {
	children: React.ReactNode,
	to: string
}

function Link ({ children, to }: IProps) {

	return (
		<Root as={NavLink} to={to}>
			{children}
		</Root>
	);

}

export default Link;
