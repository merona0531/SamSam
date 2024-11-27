import {Reset} from "styled-reset";
import {Wrapper, MainImg , LogoImg, Container, RoundedRectangle, ButtonContainer, ButtonWrapper, Button, Title} from "./mainstyle.js";
import {useNavigate} from "react-router-dom";


import MainImage from '../../images/image.png'
import Logo from '../../images/samsam.png'
import CloudSVG from './CloudSVG';




export default function MainPage() {
    const navigate = useNavigate();

    return(
        <>
            <Reset/>
            <Wrapper>
                <MainImg src={MainImage} />
                <LogoImg src={Logo}  />
                <CloudSVG />
                <Container>
                <RoundedRectangle >
                <ButtonContainer>
                    <Title>원하는 서비스를 선택해주세요.</Title>
                    <ButtonWrapper>
                        <Button>전국 체육시설 스포츠강좌 리스트</Button>
                        <Button onClick={() => navigate('/trend')}>스포츠이용권 사용 트렌드</Button>
                        <Button onClick={() => navigate('/recomendation/input')}>유사도 추천</Button>
                    </ButtonWrapper>
                </ButtonContainer>
                </RoundedRectangle>
                </Container>


            </Wrapper>
        </>
    )
}

