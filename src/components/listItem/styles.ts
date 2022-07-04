import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ThumbnailWrapper = styled.section`
	width: 144px;
	height: 144px;
	overflow: hidden;
	border-bottom: 3px solid red;
	margin-bottom: 8px;
`;

export const HeroThumbnail = styled.img`
	width: 100%;
	height: auto;
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
`;

export const LinkToHero = styled(Link)`
	text-decoration: none;
	color: ${(props) => props.theme.colors.black};
`;
