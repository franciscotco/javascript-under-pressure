// Vendors
import styled, { css } from 'styled-components';

export type typeSizeButton = 'small' | 'big';
export type typeStatusButton = 'pristine' | 'error' | 'valid';
export const Button = styled.button<{ size: typeSizeButton, status: typeStatusButton }>`
	border: none;

	padding: 0 2rem;

	${({ size }) => {
		switch (size) {
			case 'big':
				return css`
					min-width: 16rem;
					height: 10rem;
				`;
			case 'small':
			default:
				return css`
					min-width: 8rem;
					height: 5rem;
				`;
		}
	}}

	cursor: pointer;
	color: ${({ theme, status }) => {
		switch(status) {
			case 'valid':
				return theme.color.success;
			case 'error':
				return theme.color.error;
			case 'pristine':
			default:
				return theme.color.blue_dark;
		}
	}};
	background-color: ${({ theme }) => theme.color.gray_lighter};
	border: 1px solid ${({ theme, status }) => {
		switch(status) {
			case 'valid':
				return theme.color.success;
			case 'error':
				return theme.color.error;
			case 'pristine':
			default:
				return theme.color.gray_medium;
		}
	}};
`;
