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
    "배드민턴": require('../../../images/배드민턴.png'),
    "농구": require('../../../images/농구.png'),
    "야구": require('../../../images/야구.png'),
    "무용": require('../../../images/무용.png'),
    "축구": require('../../../images/축구.png'),
    "펜싱": require('../../../images/펜싱.png'),
    "복싱": require('../../../images/복싱.png'),
    "빙상": require('../../../images/빙상.png'),
    "수영": require('../../../images/수영.png'),
    "탁구": require('../../../images/탁구.png'),
    "롤러인라인": require('../../../images/롤러인라인.png'),
    "줄넘기": require('../../../images/줄넘기.png'),
    "승마": require('../../../images/승마.png'),
    "테니스": require('../../../images/테니스.png'),
    "클라이밍": require('../../../images/클라이밍.png'),
    "크로스핏": require('../../../images/크로스핏.png'),
    "댄스": require('../../../images/댄스.png'),
    "에어로빅": require('../../../images/에어로빅.png'),
};

export default function RecResultPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { mainSport, recommendations } = location.state || { mainSport: "", recommendations: [] };

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

    // 데이터 POST 예시 (데이터를 POST하는 로직과 함께 console 출력 추가)
    useEffect(() => {
        const postData = async () => {
            const requestData = {
                mainSport,
                recommendations,
            };

            console.log("POST 데이터:", requestData); // 데이터를 console에 출력

            try {
                const response = await fetch('/recommend', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestData),
                });

                const result = await response.json();
                console.log("POST 응답 데이터:", result); // 서버 응답 출력
            } catch (error) {
                console.error("POST 요청 오류:", error);
            }
        };

        if (mainSport && recommendations.length > 0) {
            postData();
        }
    }, [mainSport, recommendations]);

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
                                    <Number>0{index + 1}</Number>
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
