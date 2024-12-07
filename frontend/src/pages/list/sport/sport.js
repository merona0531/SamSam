import {Reset} from "styled-reset";
import {BtnWrapper, Container, LogoImg, SportBtn, SportImg, SportName, Title, Wrapper} from "./sportstyle";
import Logo from "../../../images/3355.png";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const images = {
    "필라테스": require('../../../images/sport/필라테스.png'),
    "복싱": require('../../../images/sport/복싱.png'),
    "주짓수": require('../../../images/sport/주짓수.png'),
    "유도": require('../../../images/sport/유도.png'),
    "골프": require('../../../images/sport/골프.png'),
    "배드민턴": require('../../../images/sport/베드민턴.png'),
    "크로스핏": require('../../../images/sport/크로스핏.png'),
    "검도": require('../../../images/sport/검도.png'),
    "농구": require('../../../images/sport/농구.png'),
    "당구": require('../../../images/sport/당구.png'),
    "댄스": require('../../../images/sport/댄스.png'),
    "롤러인라인": require('../../../images/sport/롤러인라인.png'),
    "무용": require('../../../images/sport/무용.png'),
    "배구": require('../../../images/sport/배구.png'),
    "볼링": require('../../../images/sport/볼링.png'),
    "빙상": require('../../../images/sport/빙상.png'),
    "수영": require('../../../images/sport/수영.png'),
    "스쿼시": require('../../../images/sport/스쿼시.png'),
    "승마": require('../../../images/sport/승마.png'),
    "야구": require('../../../images/sport/야구.png'),
    "에어로빅": require('../../../images/sport/에어로빅.png'),
    "줄넘기": require('../../../images/sport/줄넘기.png'),
    "축구": require('../../../images/sport/축구.png'),
    "클라이밍": require('../../../images/sport/클라이밍.png'),
    "탁구": require('../../../images/sport/탁구.png'),
    "태권도": require('../../../images/sport/태권도.png'),
    "테니스": require('../../../images/sport/테니스.png'),
    "합기도": require('../../../images/sport/합기도.png'),
    "헬스": require('../../../images/sport/헬스.png'),
    "요가": require('../../../images/sport/요가.png'),
    "기타": require('../../../images/sport/기타.png')
};

export default function BySportPage() {
    const navigate = useNavigate();
    // eslint-disable-next-line
    const [selectedSport, setSelectedSport] = useState("");

    const handleSportClick = (sport) => {
        setSelectedSport(sport);
        navigate("/list", { state: { sport, source: "BySportPage" } });
    };

    return(
        <>
            <Reset/>
            <Wrapper>
                <LogoImg src={Logo} onClick={() => navigate('/')}/>
                <Title>조회하고 싶은 종목을 선택해 주세요</Title>
                <Container>
                    <BtnWrapper>
                        {Object.entries(images).map(([key, src]) => (
                            <SportBtn key={key} onClick={() => handleSportClick(key)}>
                                <SportImg src={src} alt={key} />
                                <SportName>{key}</SportName>
                            </SportBtn>
                        ))}
                    </BtnWrapper>
                </Container>
            </Wrapper>
        </>
    )
}
