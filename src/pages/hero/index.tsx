import React from 'react';
import { useParams } from 'react-router-dom';
import { FilterInput, Container } from '../../components';
import marvelLogo from '../../assets/logo.svg';
import fav from '../../assets/favorito_01.svg';
import * as S from './styles';
import { Link } from 'react-router-dom';

const HeroPage = () => {
	const { id } = useParams();
	const [heroInfo, setHeroInfo] = React.useState({
		name: 'heroi',
		desc: 'descricao',
	});

	console.log('hero id', id);

	return (
		<Container>
			<Link to='/'>voltar</Link>
			<S.Logo src={marvelLogo} />
			<FilterInput />
			<article>
				<section>
					<header>
						<h1>{heroInfo.name}</h1>
						<img src={fav} />
					</header>
					<p>{heroInfo.desc}</p>
				</section>
				<section>
					<img src='' />
					<img src='' />
				</section>
			</article>
		</Container>
	);
};

export default HeroPage;
