import {Reset} from "styled-reset";
import { useState } from 'react';
import {
    CheckInput, Coment,
    Container, GenderBtn, GoRecBtn, Input, InputContainer,
    InputName, InputWrapper, LogoImg, Mbti, MbtiContainer, RadioForm,
    SubTitle, Title, Wrapper
} from "./inputstyle";
import Logo from '../../../images/3355.png'
import {useNavigate} from "react-router-dom";


export default function RecInputPage() {
    const navigate = useNavigate();
    const [selectedDimensions, setSelectedDimensions] = useState({
        E_I: "E",
        N_S: "N",
        T_F: "T",
        J_P: "J"
    });
    const [selectedGender, setSelectedGender] = useState(null);
    const [disability, setDisability] = useState(null); // 장애 여부 상태 추가

    const toggleDimension = (dimension) => {
        setSelectedDimensions(prevState => {
            const currentValue = prevState[dimension];
            return {
                ...prevState,
                [dimension]: currentValue === "E" ? "I" : currentValue === "I" ? "E" :
                    currentValue === "N" ? "S" : currentValue === "S" ? "N" :
                        currentValue === "T" ? "F" : currentValue === "F" ? "T" :
                            currentValue === "J" ? "P" : "J"
            };
        });
    };

    const handleGenderClick = (gender) => {
        setSelectedGender(gender);
    };

    // 장애 여부 선택 처리 함수
    const handleDisabilityChange = (value) => {
        setDisability(value);
    };

    return(
        <>
            <Reset/>
            <Wrapper>
                <LogoImg src={Logo}  onClick={() => navigate('/')}/>
                <Container>
                    <InputContainer>
                        <Title>사용자의 정보를 입력해주세요</Title>
                        <SubTitle>사용자의 정보를 종합해 알맞은 스포츠를 추천해드립니다.</SubTitle>
                        <InputWrapper>
                            <InputName>나이</InputName>
                            <Input  placeholder="ex) 25"></Input>
                        </InputWrapper>
                        <InputWrapper>
                            <InputName>성별</InputName>
                            <MbtiContainer>
                                <GenderBtn
                                    selected={selectedGender === "F"}
                                    onClick={() => handleGenderClick("F")}
                                >
                                    <svg width="24" height="46" viewBox="0 0 24 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 10.0625C10.55 10.0625 9.313 9.57088 8.289 8.58762C7.265 7.60437 6.752 6.41892 6.75 5.03125C6.748 3.64358 7.261 2.45813 8.289 1.47487C9.317 0.491625 10.554 0 12 0C13.446 0 14.684 0.491625 15.714 1.47487C16.744 2.45813 17.256 3.64358 17.25 5.03125C17.244 6.41892 16.731 7.60533 15.711 8.5905C14.691 9.57567 13.454 10.0663 12 10.0625ZM6 46V34.5H0L7.125 16.1719C7.525 15.2135 8.163 14.4354 9.039 13.8374C9.915 13.2394 10.902 12.9394 12 12.9375C13.098 12.9356 14.086 13.2355 14.964 13.8374C15.842 14.4392 16.479 15.2174 16.875 16.1719L24 34.5H18V46H6Z" fill="pink"/>
                                    </svg>
                                </GenderBtn>
                                <GenderBtn
                                    selected={selectedGender === "M"}
                                    onClick={() => handleGenderClick("M")}
                                >
                                    <svg width="18" height="48" viewBox="0 0 18 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 10.5C7.55 10.5 6.313 9.987 5.289 8.961C4.265 7.935 3.752 6.698 3.75 5.25C3.748 3.802 4.261 2.565 5.289 1.539C6.317 0.513 7.554 0 9 0C10.446 0 11.684 0.513 12.714 1.539C13.744 2.565 14.256 3.802 14.25 5.25C14.244 6.698 13.731 7.936 12.711 8.964C11.691 9.992 10.454 10.504 9 10.5ZM3 48V33H0V19.5C0 17.85 0.588001 16.438 1.764 15.264C2.94 14.09 4.352 13.502 6 13.5H12C13.65 13.5 15.063 14.088 16.239 15.264C17.415 16.44 18.002 17.852 18 19.5V33H15V48H3Z" fill="#9A9DFF"/>
                                    </svg>
                                </GenderBtn>
                            </MbtiContainer>
                        </InputWrapper>
                        <InputWrapper>
                            <InputName>MBTI
                                <Coment>MBTI를 클릭하시면 변경됩니다!</Coment>
                            </InputName>
                            <MbtiContainer>
                                <Mbti onClick={() => toggleDimension("E_I")}>{selectedDimensions.E_I}</Mbti>
                                <Mbti onClick={() => toggleDimension("N_S")}>{selectedDimensions.N_S}</Mbti>
                                <Mbti onClick={() => toggleDimension("T_F")}>{selectedDimensions.T_F}</Mbti>
                                <Mbti onClick={() => toggleDimension("J_P")}>{selectedDimensions.J_P}</Mbti>
                            </MbtiContainer>
                        </InputWrapper>
                        <RadioForm>
                            <InputName>장애 여부를 알려주세요.</InputName>
                            <div style={{display:'flex', alignItems:'center', marginTop:'15px'}}>
                                <CheckInput
                                    type="radio"
                                    checked={disability === "yes"}
                                    onChange={() => handleDisabilityChange("yes")}
                                />예
                                <div style={{width:'20px'}}></div>
                                <CheckInput
                                    type="radio"
                                    checked={disability === "no"}
                                    onChange={() => handleDisabilityChange("no")}
                                />아니오
                            </div>
                        </RadioForm>
                        <GoRecBtn onClick={() => navigate('/recomendation/result')}>추천받기</GoRecBtn>
                    </InputContainer>
                </Container>
            </Wrapper>
        </>
    );
}
