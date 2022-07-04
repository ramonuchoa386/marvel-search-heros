import styled from 'styled-components';

const Container = styled.section`
	padding: 20px;
	border-bottom: 20px solid ${(props) => props.theme.colors.red};

	@media only screen and (min-width: 768px) {
		padding-left: 56px;
		padding-right: 56px;
	}

	@media only screen and (min-width: 1280px) {
		padding: 32px 128px 64px;
	}
`;

export default Container;
