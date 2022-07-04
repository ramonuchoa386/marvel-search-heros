import styled from 'styled-components';

export const Logo = styled.img`
	display: block;
	margin: 0 auto 24px;
	width: 100%;
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
`;

export const HerosList = styled.ul`
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 auto;
	padding: 0;
`;

export const HeroHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 8px;
`;

export const HeroFeats = styled.ul`
	list-style-type: none;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-top: 16px;

	li {
		width: 45%;

		strong {
			margin-bottom: 8px;
		}
		div {
			display: flex;
			justify-content: flex-start;
			align-items: center;

			img {
				width: auto;
				height: 16px;
				margin-right: 8px;
			}
		}
	}
`;

export const HeroImages = styled.section`
	position: relative;
	margin-top: 54px;
	height: 50vh;

	img:first-of-type {
		position: absolute;
		top: 0px;
		left: 20px;
		opacity: 0.5;
		z-index: 1;
	}

	img:last-of-type {
		position: absolute;
		top: 200px;
		left: 50px;
	}
`;

export const HeroInfoContainer = styled.div`
	@media only screen and (min-width: 768px) {
		display: flex;

		& > section {
			width: 50%;
		}
	}
`;

export const FlexContainer = styled.div`
	@media only screen and (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const HeroLastComics = styled.ul`
	list-style-type: none;
	width: 100%;

	@media only screen and (min-width: 768px) {
		display: flex;
		justify-content: space-between;
	}

	li {
		@media only screen and (min-width: 768px) {
			max-width: 250px;
			margin-right: 24px;
		}
	}
`;
