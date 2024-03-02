import './App.css';
import styled from 'styled-components';
import { StyledBtn } from './components/button.styled';
import { myTheme } from './styles/Theme.styled';
import desert from './images/Travel/card-images/Desert.jpg';



function App() {
	return (
		<Travel>
			<Container>
				<Title>Our travel product</Title>
				<CardsProduct>
					<ProductCardBLock>
						<ProductCard>
							<ProductCardImgBlock>
								<ProductCardImg />
							</ProductCardImgBlock>
							<ProductCardText>
								<ProductCardTitle>Headline</ProductCardTitle>
								<ProductCardDescription>
									Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
								</ProductCardDescription>
								<ProductCardButtons>
									<ProductCardButton>
										See more
									</ProductCardButton>
									<ProductCardButton>
										Save
									</ProductCardButton>
								</ProductCardButtons>
							</ProductCardText>
						</ProductCard>
					</ProductCardBLock>
					<ProductCardBLock>
						<ProductCard>
							<ProductCardImgBlock>
								<ProductCardImg />
							</ProductCardImgBlock>
							<ProductCardText>
								<ProductCardTitle>Headline</ProductCardTitle>
								<ProductCardDescription>
									Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
								</ProductCardDescription>
								<ProductCardButtons>
									<ProductCardButton>
										See more
									</ProductCardButton>
									<ProductCardButton>
										Save
									</ProductCardButton>
								</ProductCardButtons>
							</ProductCardText>
						</ProductCard>
					</ProductCardBLock>
					<ProductCardBLock>
						<ProductCard>
							<ProductCardImgBlock>
								<ProductCardImg />
							</ProductCardImgBlock>
							<ProductCardText>
								<ProductCardTitle>Headline</ProductCardTitle>
								<ProductCardDescription>
									Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
								</ProductCardDescription>
								<ProductCardButtons>
									<ProductCardButton>
										See more
									</ProductCardButton>
									<ProductCardButton>
										Save
									</ProductCardButton>
								</ProductCardButtons>
							</ProductCardText>
						</ProductCard>
					</ProductCardBLock>




				</CardsProduct>

			</Container>
		</Travel>
	);
}

export default App;



const Travel = styled.section`
	background-color: ${myTheme.colors.grey.dark};
	overflow: hidden;
	
`;

const Container = styled.div`
    max-width: ${myTheme.container.containerWidth};
	margin: 0px auto;
	padding: 10px 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	display: flex;
	
`;

const Title = styled.h2`
	font-size: 40px;
	color: #fff;
	font-weight: 700;
	margin-bottom: 30px;
`;

const CardsProduct = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 0 -49px;
	row-gap: 50px;
`;

const ProductCardBLock = styled.div`
	display: flex;
	flex: 0 1 33%;
	padding: 0 49px;
	justify-content: center;
	
	@media (max-width: ${myTheme.size.pc}) {
		flex: 0 1 50%;
	}
	@media (max-width: ${myTheme.size.mobile}) {
		flex: 0 1 100%;
	}
`;

const ProductCard = styled.div`
display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	min-width: 300px;
	row-gap: 20px;
	border-radius: 15px;
	box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
	background: rgb(255, 255, 255);
	padding: 10px 10px 22px 10px;
`;

const ProductCardImgBlock = styled.div`
	padding: 0 0 60% 0;
	position: relative;
    transition: 0.3s;
	width: 100%;
`;


const ProductCardImg = styled.img`
	border-radius: 12px;
	object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;
ProductCardImg.defaultProps = {
	src: desert
}

const ProductCardText = styled.div`
	font-size: 12px;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
	row-gap: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	@media (max-width: ${myTheme.size.pc}) {
		font-size: 15px;
	}
`;

const ProductCardTitle = styled.h3`
	font-size: 16px;
	font-weight: 700;
	line-height: 19px;
	text-align: left;	
	@media (max-width: ${myTheme.size.pc}) {
		font-size: 30px;
	}
`;

const ProductCardDescription = styled.p`
	color: rgb(171, 179, 186);
`;

const ProductCardButtons = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
`;

const ProductCardButton = styled.button`
	padding: 5px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	background: rgb(78, 113, 254);
	color: #fff;
	min-width: 86px;
	color: rgb(255, 255, 255);
	font-size: 10px;
	font-weight: 700;
	line-height: 20px;
	letter-spacing: 0%;
	@media (max-width: ${myTheme.size.pc}) {
		font-size: 12px;
		flex: 1 1;
		padding: 10px 20px;
	}
	@media (max-width: ${myTheme.size.mobile}) {
		font-size: 14px;
	}

`;