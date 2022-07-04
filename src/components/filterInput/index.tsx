import React from 'react';
import { SearchInput, InputWrapper, InputIcon } from './styles';
import searchIcon from '../../assets/ic_busca.svg';

const FilterInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<InputWrapper>
			<InputIcon src={searchIcon} />
			<SearchInput type='text' placeholder='Procure por heróis' {...props} />
		</InputWrapper>
	);
};

export default FilterInput;
