import React from 'react';
import { useParams } from 'react-router-dom';
import { FilterInput, Container } from '../../components';
import marvelLogo from '../../assets/logo.svg';
import notFav from '../../assets/favorito_02.svg';
import fav from '../../assets/favorito_01.svg';
import comicsIcon from '../../assets/ic_quadrinhos.svg';
import movieIcon from '../../assets/ic_trailer.svg';
import * as S from './styles';
import { Link } from 'react-router-dom';

interface IHero {
	id?: number;
	name?: string;
	description?: string;
	modified?: string;
	resourceURI?: string;
	urls?: any[];
	thumbnail?: any;
	comics?: any;
	stories?: any;
	events?: any;
	series?: any;
}

const HeroPage = () => {
	const { id } = useParams();
	const [heroInfo, setHeroInfo] = React.useState<IHero>();
	const [isFav, setIsFav] = React.useState(false);

	const dateFormat = () => {
		let date;

		const monthNames = [
			'jan.',
			'fev.',
			'mar.',
			'abr.',
			'mai.',
			'jun.',
			'jul.',
			'ago.',
			'set.',
			'out.',
			'nov.',
			'dez.',
		];

		if (heroInfo?.modified !== undefined) {
			const rawDate = new Date(heroInfo?.modified);

			date =
				rawDate.getDate() +
				' ' +
				monthNames[rawDate.getMonth()] +
				' ' +
				rawDate.getFullYear();
		}

		return date;
	};

	React.useLayoutEffect(() => {
		const favList = localStorage.getItem('fav-marvel-heros');

		if (favList !== null) {
			const currentFavList = JSON.parse(favList);

			if (id) {
				setIsFav(currentFavList.includes(parseInt(id)));
			}
		}
	}, [heroInfo]);

	React.useEffect(() => {
		fetch(
			`https://gateway.marvel.com/v1/public/characters/${id}?apikey=a14aa78a3a5950f83e0467605559fa9e`,
		)
			.then((res) => res.json())
			.then((data) => {
				setHeroInfo(data.data.results[0]);
			});
	}, []);

	return (
		<Container>
			<S.FlexContainer>
				<Link to='/'>
					<S.Logo src={marvelLogo} />
				</Link>
				<FilterInput />
			</S.FlexContainer>
			<main>
				<S.HeroInfoContainer>
					<section>
						<S.HeroHeader>
							<h1>{heroInfo?.name}</h1>
							<img src={isFav ? fav : notFav} />
						</S.HeroHeader>
						<p>{heroInfo?.description}</p>
						<S.HeroFeats>
							<li>
								<strong>Quadrinhos</strong>
								<div>
									<img src={comicsIcon} />
									<p>{heroInfo?.comics.available}</p>
								</div>
							</li>
							<li>
								<strong>Filmes</strong>
								<div>
									<img src={movieIcon} />
									<p>{heroInfo?.series.available}</p>
								</div>
							</li>
						</S.HeroFeats>
						<div style={{ marginTop: '24px' }}>
							<strong>Rating:</strong>
						</div>
						<p style={{ marginTop: '24px' }}>
							<strong>??ltimo quadrinho: </strong>
							{dateFormat()}
						</p>
					</section>
					<S.HeroImages>
						<img src={`${heroInfo?.thumbnail.path}/portrait_incredible.jpg`} />
						<img src={`${heroInfo?.thumbnail.path}/landscape_medium.jpg`} />
					</S.HeroImages>
				</S.HeroInfoContainer>
				<h2>Ultimos Lan??amentos</h2>
				<S.HeroLastComics>
					{heroInfo?.series.items.map((item: { name: string }, key: number) => {
						return (
							<li key={key}>
								<img src='not-found' />
								<p>{item.name}</p>
							</li>
						);
					})}
				</S.HeroLastComics>
			</main>
		</Container>
	);
};

export default HeroPage;
