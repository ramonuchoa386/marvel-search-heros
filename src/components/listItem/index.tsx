import React, { useEffect, useState } from 'react';
import notFav from '../../assets/favorito_02.svg';
import fav from '../../assets/favorito_01.svg';
import * as S from './styles';

interface IListItem extends React.LiHTMLAttributes<HTMLLIElement> {
	thumbnail?: string;
	name?: string;
	id?: string;
}

const ListItem = (props: IListItem) => {
	const {
		thumbnail = 'not-found',
		name = 'Hero name',
		id = '0',
		...args
	} = props;
	const [favorite, setFavorite] = useState(false);

	const handleFavorite = () => {
		const favList = localStorage.getItem('fav-marvel-heros');

		if (favList === null) {
			localStorage.setItem('fav-marvel-heros', JSON.stringify([id]));

			setFavorite(!favorite);
		} else {
			const oldFavList: string[] = JSON.parse(favList);

			if (!oldFavList.includes(id)) {
				if (!(oldFavList.length < 5)) {
					window.alert('Nível máximo de favoritos atingido.');
				} else {
					localStorage.setItem(
						'fav-marvel-heros',
						JSON.stringify([...oldFavList, id]),
					);

					setFavorite(!favorite);
				}
			} else {
				const updatedFavList = oldFavList.filter((currentId) => {
					return currentId !== id;
				});

				localStorage.setItem(
					'fav-marvel-heros',
					JSON.stringify(updatedFavList),
				);

				setFavorite(!favorite);
			}
		}
	};

	useEffect(() => {
		const favList = localStorage.getItem('fav-marvel-heros');

		if (favList !== null) {
			const currentFavList: string[] = JSON.parse(favList);

			if (currentFavList.includes(id)) {
				setFavorite(true);
			}
		}
	}, []);

	return (
		<S.ItemWrapper {...args}>
			<S.LinkToHero to={`/hero/${id}`}>
				<S.ThumbnailWrapper>
					<S.HeroThumbnail src={`${thumbnail}/portrait_incredible.jpg`} />
				</S.ThumbnailWrapper>
			</S.LinkToHero>

			<S.HeroNameWrapper>
				<S.LinkToHero to={`/hero/${id}`}>{name}</S.LinkToHero>
				<img src={favorite ? fav : notFav} onClick={() => handleFavorite()} />
			</S.HeroNameWrapper>
		</S.ItemWrapper>
	);
};

export default ListItem;
