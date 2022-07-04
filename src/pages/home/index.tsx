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
	const [list] = React.useState<any[]>([]);
	const [toggleSwitch, setToggleSwitch] = React.useState(false);
	const [searchQuery, setSearchQuery] = React.useState('');

	return (
		<Container>
			<S.Logo src={marvelLogo} />
			<S.Title>Explore o Universo</S.Title>
			<S.CenterText>
				Mergulhe no domínio deslumbrante de todos os personagens clássicos que
				você ama - e aqueles que você descobrirá em breve!
			</S.CenterText>

			<FilterInput
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.currentTarget.value)}
			/>

			<p>Encontrados 20 heróis</p>

			<SortComponent
				onClick={() => setToggleSwitch(!toggleSwitch)}
				state={toggleSwitch}
			/>

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
		</Container>
	);
};

export default HomePage;
