import styled from 'styled-components';

export const Logo = styled.img`
	display: block;
	margin: 0 auto 24px;
	width: 100%;
	max-width: 450px;
`;

export const CenterText = styled.p`
	text-align: center;
	color: #8c8c8c;
	margin-bottom: 24px;
`;

export const Title = styled.h1`
	text-align: center;
	text-transform: uppercase;
	color: #3f3f3f;
	margin-bottom: 8px;
`;

export const HerosList = styled.ul`
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 auto;
	padding: 0;
`;

export const FlexContainer = styled.div`
	@media only screen and (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const PaginateBtn = styled.button`
	border: none;
	background-color: ${(props) => props.theme.colors.pink};
	text-transform: uppercase;
	padding: 4px 16px;
	margin: 16px;
	font-weight: bold;
	font-size: 0.725rem;
	color: ${(props) => props.theme.colors.red};
	transition: all 500ms ease;

	&:hover {
		transition: all 300ms ease;
		background-color: ${(props) => props.theme.colors.red};
		color: white;
	}

	&:disabled {
		background-color: ${(props) => props.theme.colors.lightGrey};
		color: white;
	}
`;
