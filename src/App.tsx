import styled from 'styled-components';
import desertImage from './assets/images/desert.svg'


function App() {
	return (
		
		<Wrapper>
			<Container>
				<Image/>
				<UnderImageBox>
					<Title>Headline</Title>
					<Description>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Description>
					<ButtonsBox>
						<Button variant="primary">See more</Button>
						<Button variant="secondary">Save</Button>

					</ButtonsBox>
					
				</UnderImageBox>
			</Container>
		</Wrapper>
	
	
	);
}

export default App;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100vh
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 300px;
    height: 350px;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.10);

`
const Image = styled.div`
    display: flex;
    background-image: url(${desertImage});
    background-size: cover;
    background-position: center;
    height: 170px;
    width: 280px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`

const UnderImageBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 20px 0px 20px;

`
const Title = styled.div`
    font-weight: 700;
    font-size: 16px;
    color: #000;
`
const Description = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.66667;
    color: #abb3ba;
	margin-top: 20px;
`

const ButtonsBox = styled.div`
	display: flex;
	gap: 12px;
	margin-top: 19px;
`

type ButtonProps = {
	variant: 'primary' | 'secondary';
};

const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 86px;
    border-radius: 5px;
    background: ${props => props.variant === 'primary' ? '#4E71FE' : '#ffffff'};
    border: ${props => props.variant === 'primary' ? 'none' : '2px solid #4E71FE'};
    color: ${props => props.variant === 'primary' ? '#fff' : '#4E71FE'};
    font-weight: 700;
    font-size: 10px;
    text-align: center;
    cursor: pointer;
`



