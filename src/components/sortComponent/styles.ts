import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin: 10px 0px;
`;

export const ParamIcon = styled.img`
	margin-right: 4px;
	display: none;
`;

export const ParamWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const ParamDesc = styled.p`
	font-size: 0.725rem;
	color: ${(props) => props.theme.colors.red};
`;

export const SwitchWrapper = styled.div<{ toggle: boolean }>`
	display: flex;
	background-color: ${(props) => props.theme.colors.lightGrey};
	width: 36px;
	height: 18px;
	padding: 8px;
	border-radius: 50px;
	flex-direction: ${(props) => (props.toggle ? 'row-reverse' : 'row')};
	align-items: center;
	margin: 0 8px;
`;

export const SwitchBtn = styled.span`
	width: 9px;
	height: 9px;
	border-radius: 9px;
	display: block;
	background-color: red;
	box-shadow: -1px 1px 5px ${(props) => props.theme.colors.red};
`;
