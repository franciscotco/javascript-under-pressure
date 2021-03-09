// Vendor
import React from 'react';

// Styles
import { Editor as Root, TextArea } from './styles';

interface IProps {
	value: string,
	onChange: (value: string) => void
}

function Editor ({ value, onChange }: IProps) {

	const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const val = event?.target?.value;

		onChange(val);
	};

	return (
		<Root>
			<TextArea value={value} onChange={handleOnChange}>
				Editor
			</TextArea>
		</Root>
	);

}

export default Editor;
