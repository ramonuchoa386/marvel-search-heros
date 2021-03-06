import React from 'react';
import {
	FilterInput,
	ListItem,
	SortComponent,
	Container,
} from '../../components';
import marvelLogo from '../../assets/logo.svg';
import * as S from './styles';

const HomePage = () => {
	const [list, setList] = React.useState<any[]>([]);
	const [toggleSwitch, setToggleSwitch] = React.useState(false);
	const [searchQuery, setSearchQuery] = React.useState('');
	const [lastPage, setLastPage] = React.useState(0);
	const [total, setTotal] = React.useState(0);
	const [limit, setLimit] = React.useState(0);
	const [listOffset, setListOffset] = React.useState(0);

	React.useLayoutEffect(() => {
		if (toggleSwitch) {
			const favList = localStorage.getItem('fav-marvel-heros');
			const onlyFavList: any[] = [];

			if (favList !== null) {
				const currentFavList = JSON.parse(favList);

				currentFavList.map((id: number) => {
					fetch(
						`https://gateway.marvel.com/v1/public/characters/${id}?apikey=a14aa78a3a5950f83e0467605559fa9e`,
					)
						.then((res) => res.json())
						.then((data) => {
							onlyFavList.push(data.data.results[0]);
							setList([...onlyFavList]);
							setTotal(onlyFavList.length);
						});
				});
			}
		} else {
			let url;

			if (searchQuery === '') {
				url = `https://gateway.marvel.com:443/v1/public/characters?offset=${listOffset}&apikey=a14aa78a3a5950f83e0467605559fa9e`;
			} else {
				url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchQuery}&offset=${listOffset}&apikey=a14aa78a3a5950f83e0467605559fa9e`;
			}

			fetch(url)
				.then((res) => res.json())
				.then((data) => {
					setList(data.data.results);
					setLastPage(data.data.count);
					setLimit(data.data.limit);
					setTotal(data.data.total);
				});
		}
	}, [listOffset, searchQuery, toggleSwitch]);

	const handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
		setListOffset(0);
		setSearchQuery(e.currentTarget.value);
	};

	const handleSort = () => {
		setToggleSwitch(!toggleSwitch);
	};

	return (
		<Container>
			<S.Logo src={marvelLogo} />
			<S.Title>Explore o Universo</S.Title>
			<S.CenterText>
				Mergulhe no dom??nio deslumbrante de todos os personagens cl??ssicos que
				voc?? ama - e aqueles que voc?? descobrir?? em breve!
			</S.CenterText>

			<FilterInput value={searchQuery} onChange={handleTextChange} />

			<S.FlexContainer>
				<p>Encontrados {total} her??is</p>
				<SortComponent onClick={handleSort} state={toggleSwitch} />
			</S.FlexContainer>

			<S.HerosList>
				{list.map((item: any, key) => (
					<ListItem
						key={`heroid-${item.id}-${key}`}
						name={item.name}
						thumbnail={item.thumbnail.path}
						id={item.id}
					/>
				))}
			</S.HerosList>

			<div style={{ width: 'fit-content', margin: '0 auto' }}>
				<S.PaginateBtn
					type='button'
					onClick={() => setListOffset(listOffset - limit)}
					disabled={listOffset === 0}>
					voltar
				</S.PaginateBtn>
				<S.PaginateBtn
					type='button'
					onClick={() => setListOffset(listOffset + limit)}
					disabled={lastPage < limit}>
					avan??ar
				</S.PaginateBtn>
			</div>
		</Container>
	);
};

export default HomePage;
