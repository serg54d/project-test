import styled, { css } from 'styled-components';


// type StyledBtnPropsType = {
// 	color?: string;
// 	fontSize?: string;
// 	outlined?: boolean;
// 	primary?: boolean;
// }

type StyledBtnPropsType = {
	color?: string;
	fontSize?: string;
	btnType: 'primary' | 'outlined';
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
	display: flex;
	max-width: 500px;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 10px;
	padding: 10px 20px;
	font-size: ${props => props.fontSize || '20px'};
	font-weight: 700;
	transition: 0.3s;
	cursor: pointer;


	&:hover {
		background-color:  #724646;
		border: 2px solid #991a1a;
	}


	${props => props.btnType === 'outlined' && css<StyledBtnPropsType>`
		border: 2px solid ${props => props.color || '#fdefef'};
		color: ${props => props.color || '#fdefef'};
		background-color: ${props => props.color || 'transparent'};
	` }
	

	/* primary */

	${props => props.btnType === 'primary' && css<StyledBtnPropsType>`
		background-color: ${props => props.color || '#991a1a'};
		color: #1708ec;
	` }
	
`