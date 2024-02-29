import './App.css';
import styled from 'styled-components';
import { StyledBtn } from './components/button.styled';
import { myTheme } from './styles/Theme.styled';



function App() {
	return (
		<Lesson>
			<Lesson__Container width='1140px'>
				<Checkbox />
				<Field placeholder="Hello!!!" />
				{/* <StyledBtn color={'#08ec39'} fontSize='30px'>Кнопка</StyledBtn>
			<StyledBtn color={'#b0cf66'} fontSize='25px'>Кнопка</StyledBtn> */}
				{/* <StyledBtn primary>Кнопка</StyledBtn>
				<StyledBtn outlined>Кнопка</StyledBtn> */}
				<StyledBtn color={myTheme.colors.primary} btnType={'primary'}>Кнопка</StyledBtn>
				<StyledBtn btnType={'outlined'}>Кнопка</StyledBtn>

			</Lesson__Container>
		</Lesson>
	);
}

export default App;

type Lesson__Container = {
	width: string;
}

const Lesson = styled.div`
    /* background-color: #303030; */
	background-color: ${myTheme.colors.grey.dark};
	height: 100vh;
`;

const Lesson__Container = styled.div<Lesson__Container>`
    max-width: 1140px;
	margin: 0px auto;
	padding: 10px 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	
`;

const Checkbox = styled.input.attrs(() => (
	{
		type: 'checkbox'
	}
))`
   display: flex;
   width: 30px;
`;



const Field = styled.input.attrs(({ placeholder }) => ({
	type: "password",
	placeholder: placeholder || "Type smth..."
}))`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
  max-width: 300px;
`;