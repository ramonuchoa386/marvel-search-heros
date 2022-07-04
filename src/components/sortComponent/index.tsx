import React from 'react';
import heroIcon from '../../assets/ic_heroi.svg';
import fav from '../../assets/favorito_01.svg';
import * as S from './styles';

export interface ISortComponentProps {
	onClick: () => void;
	state: boolean;
}

const SortComponent = (props: ISortComponentProps) => {
	const { onClick, state } = props;

	return (
		<S.Wrapper>
			<S.ParamWrapper>
				<S.ParamIcon src={heroIcon} />
				<S.ParamDesc>Ordenar por nome - A/Z</S.ParamDesc>
			</S.ParamWrapper>
			<S.SwitchWrapper onClick={onClick} toggle={state}>
				<S.SwitchBtn />
			</S.SwitchWrapper>
			<S.ParamWrapper>
				<S.ParamIcon src={fav} />
				<S.ParamDesc>Somente favoritos</S.ParamDesc>
			</S.ParamWrapper>
		</S.Wrapper>
	);
};

export default SortComponent;
