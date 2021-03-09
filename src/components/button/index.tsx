// Vendors
import React from 'react';

// Styles
import {
	Button as Root, typeSizeButton, typeStatusButton
} from './styles';

interface IProps {
	label: string,
	size: typeSizeButton,
	status: typeStatusButton,
	onClick?: () => void
}

function Button ({ status, size, label, onClick }: IProps) {

	return (
		<Root status={status} onClick={onClick} size={size} >
			{label}
		</Root>
	);

}

Button.defaultProps = {
	size: 'small',
	status: 'pristine'
};

export default Button;
