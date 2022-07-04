import styled from 'styled-components';

const Container = styled.section`
	padding: 20px 20px 0;

	@media only screen and (min-width: 768px) {
		padding-left: 56px;
		padding-right: 56px;
	}

	@media only screen and (min-width: 1280px) {
		padding-left: 130px;
		padding-right: 130px;
	}
`;

export default Container;
