import { useState, useEffect } from "react";
import { Reset } from "styled-reset";
import {
    Container, Container2, Explane,
    LogoContainer, MainImg, Number, Sub, SubWrapper,
    SubImg, Title, Wrapper, LogoImg, Name
} from "./resultstyle";
import Logo from '../../../images/3355.png';
import { useNavigate, useLocation } from "react-router-dom";

// 이미지 매핑 객체
const images = {
    "요가": require('../../../images/요가.png'),
    "필라테스": require('../../../images/필라테스.png'),
    "골프": require('../../../images/골프.png'),
    "베드민턴": require('../../../images/베드민턴.png'),
};

export default function RecResultPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { mainSport, recommendations } = location.state;

    const [description, setDescription] = useState("");

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const response = await fetch(
                    `https://ko.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(mainSport)}`
                );
                const data = await response.json();
                if (data.extract) {
                    setDescription(data.extract);
                } else {
                    setDescription("설명을 가져올 수 없습니다.");
                }
            } catch (error) {
                console.error("Error fetching Wikipedia data:", error);
                setDescription("오류가 발생했습니다.");
            }
        };

        fetchDescription();
    }, [mainSport]);

    return (
        <>
            <Reset />
            <Wrapper>
                <LogoContainer>
                    <LogoImg src={Logo} onClick={() => navigate("/")} />
                </LogoContainer>
                <Container>
                    <Container2>
                        <Title>
                            당신에게 알맞은 스포츠 > <p>{mainSport}</p>
                        </Title>
                        <MainImg src={images[mainSport]} alt={mainSport} />
                        <Explane>
                            {description || `${mainSport}에 대한 설명을 불러오는 중입니다...`}
                        </Explane>
                        <Title>
                            이외의 추천
                        </Title>
                        <SubWrapper>
                            {recommendations.map((rec, index) => (
                                <Sub key={index}>
                                    <Number>{index + 1}</Number>
                                    <SubImg src={images[rec]} alt={rec} />
                                    <Name>{rec}</Name>
                                </Sub>
                            ))}
                        </SubWrapper>
                    </Container2>
                </Container>
            </Wrapper>
        </>
    );
}
