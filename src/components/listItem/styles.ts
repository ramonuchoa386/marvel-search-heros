import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroThumbnail = styled.img`
	width: 100%;
	height: auto;
	border-bottom: 3px solid red;
	margin-bottom: 8px;
`;

export const HeroNameWrapper = styled.section`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	font-weight: bold;
`;

export const ItemWrapper = styled.li`
	width: 45%;
	margin-bottom: 16px;

	@media only screen and (min-width: 768px) {
		max-width: 220px;
	}
`;

export const LinkToHero = styled(Link)`
	text-decoration: none;
	color: ${(props) => props.theme.colors.black};
`;
