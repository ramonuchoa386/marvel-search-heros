import styled from 'styled-components';

export const InputWrapper = styled.div`
	background-color: #ffebec;
	position: relative;
	margin: 0 auto 24px;
	width: 100%;
	padding: 16px 32px;
	border-radius: 50px;
	display: flex;
	align-items: center;
`;

export const InputIcon = styled.img`
	margin-right: 16px;
	width: 18px;
	height: 18px;
`;

export const SearchInput = styled.input`
	border: none;
	background-color: transparent;
	width: 100%;
	color: #ff6b78;

	&:focus {
		outline: none;
	}

	&::placeholder {
		color: #ff6b78;
	}
`;
