// Vendors
import styled from 'styled-components';

export const Editor = styled.pre`
	display: flex;
`;

export const TextArea = styled.textarea`
	appearance: none;
    border: none;
    resize: none;
    outline: none;
    overflow: hidden;

	flex: 1;
	height: 20rem;

	padding: 1rem;

	border: 1px solid ${({ theme }) => theme.color.gray_lighter};

`;
