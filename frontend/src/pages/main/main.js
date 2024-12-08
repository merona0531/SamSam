import {Reset} from "styled-reset";
import {
    Wrapper,
    MainImg,
    LogoImg,
    RoundedRectangle,
    ButtonContainer,
    ButtonWrapper,
    Button,
    Title,
    ListButtonWrapper, LButton, RButton, MButton, Virtical, ListBtnWrapper
} from "./mainstyle.js";
import {useNavigate} from "react-router-dom";

import MainImage from '../../images/배경화면.jpg'
import Logo from '../../images/samsam.png'


export default function MainPage() {
    const navigate = useNavigate();

    return(
        <>
            <Reset/>
            <Wrapper>
                <MainImg src={MainImage} />
                <LogoImg src={Logo}  />
                <RoundedRectangle >
                    <div style={{ marginBottom: "3px", opacity: "0.5", fontSize:"10px" }}>
                        <a href="http://www.freepik.com">Designed by Freepik</a>
                    </div>
                    <ButtonContainer>
                        <Title>원하는 서비스를 선택해주세요.</Title>
                        <ButtonWrapper>
                            <ListButtonWrapper>
                                전국 체육시설 스포츠강좌 리스트
                                <ListBtnWrapper>
                                    <LButton onClick={() => navigate('/list/byregion')}>지역별</LButton>
                                    <Virtical/>
                                    <MButton onClick={() => navigate('/list/bysport')}>종목별</MButton>
                                    <Virtical/>
                                    <RButton onClick={() => navigate('/map')}>지도로 확인해보기</RButton>
                                </ListBtnWrapper>
                            </ListButtonWrapper>
                            <Button onClick={() => navigate('/recomendation/input')}>스포츠 추천</Button>
                        </ButtonWrapper>
                    </ButtonContainer>
                </RoundedRectangle>
            </Wrapper>
        </>
    )
}

