// Vendors
import React from 'react';

// Styles
import {
	Button as Root, typeSizeButton
} from './styles';

interface IProps {
	label: string,
	size: typeSizeButton,
	onClick?: () => void
}

function Button ({ size, label, onClick }: IProps) {

	return (
		<Root onClick={onClick} size={size} >
			{label}
		</Root>
	);

}

Button.defaultProps = {
	size: 'small'
};

export default Button;
