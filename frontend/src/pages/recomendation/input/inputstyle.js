import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #001E5A;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const LogoImg = styled.img`
  width: 150px;
  margin-left: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100px; /* 모바일에서는 로고 크기 축소 */
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    padding: 20px;
  }
`;

export const InputContainer = styled.div`
  width: 680px;
  height: 95%;
  background-color: white;
  border-radius: 165px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%; /* 모바일에서는 너비 축소 */
    height: auto; /* 모바일에서는 높이 자동 조정 */
    padding: 20px; /* 모바일에서 여백 추가 */
    border-radius: 20px; /* 둥글기 축소 */
  }
`;

export const Title = styled.div`
  font-size: 22px;
  font-family: Title;

  @media (max-width: 768px) {
    font-size: 18px; /* 모바일에서 폰트 크기 축소 */
    text-align: center; /* 모바일에서 중앙 정렬 */
  }
`;

export const SubTitle = styled.div`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 30px;
  font-family: SubTitle;

  @media (max-width: 768px) {
    font-size: 16px; /* 모바일에서 폰트 크기 축소 */
    text-align: center; /* 모바일에서 중앙 정렬 */
    margin-top: 10px; /* 모바일에서 여백 조정 */
  }
`;

export const InputWrapper = styled.div`
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 100%; /* 모바일에서는 입력 필드 전체 너비 사용 */
  }
`;

export const InputName = styled.div`
  font-family: Regular;
  display: flex;
  height: 17px;

  @media (max-width: 768px) {
    font-size: 14px; /* 모바일에서 폰트 크기 축소 */
  }
`;

export const Coment = styled.div`
  font-size: 12px;
  color: #9D9D9D;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 15px;

  @media (max-width: 768px) {
    font-size: 10px; /* 모바일에서 폰트 크기 축소 */
  }
`;

export const Input = styled.input`
  width: 380px;
  height: 40px;
  border: 2px solid black;
  margin-top: 5px;

  @media (max-width: 768px) {
    width: 100%; /* 모바일에서 입력 필드 너비 100%로 */
    font-size: 14px; /* 모바일에서 폰트 크기 축소 */
  }
`;

export const CheckInput = styled.input`
  border: 2px solid black;

  @media (max-width: 768px) {
    width: 30px; /* 모바일에서 체크박스 크기 축소 */
    height: 30px;
  }
`;

export const GenderBtn = styled.div`
  width: 45px;
  height: 45px;
  font-size: 18px;
  color: ${(props) => (props.selected ? 'white' : '#001E5A')};
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  border: 2px solid black;
  background-color: ${(props) => (props.selected ? '#001E5A' : 'white')};
  appearance: none;
  padding: 10px;
  cursor: pointer;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 40px; /* 모바일에서 버튼 크기 축소 */
    height: 40px;
    font-size: 16px; /* 폰트 크기 축소 */
  }
`;

export const MbtiContainer = styled.div`
  margin-top: 10px;
  width: 380px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%; /* 모바일에서 너비 100%로 */
    flex-wrap: wrap; /* 모바일에서 아이템들이 여러 줄로 배치되도록 */
    justify-content: center; /* 중앙 정렬 */
  }
`;

export const Mbti = styled.button`
  width: 45px;
  height: 45px;
  font-size: 18px;
  color: black;
  background-color: #FFE8F5;
  border-radius: 30px;
  appearance: none;
  position: relative;
  border: 2px solid black;
  cursor: pointer;
  margin-right: 5px;

  @media (max-width: 768px) {
    width: 40px; /* 모바일에서 버튼 크기 축소 */
    height: 40px;
    font-size: 16px; /* 폰트 크기 축소 */
    margin-right: 8px; /* 여백 조정 */
  }
`;

export const GoRecBtn = styled.button`
  width: 365px;
  height: 52px;
  border: none;
  background-color: #FDB9DF;
  border-radius: 30px;
  margin-top: 40px;
  font-size: 20px;
  cursor: pointer;
  font-family: SubTitle;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #FF85C1;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 90%; /* 모바일에서 너비 90%로 */
    font-size: 18px; /* 폰트 크기 축소 */
    height: 45px; /* 버튼 높이 줄이기 */
  }
`;

export const RadioForm = styled.div`
  font-family: Regular;
  width: 380px;
  font-size: 17px;
  margin-top: 25px;

  @media (max-width: 768px) {
    width: 100%; /* 모바일에서 너비 100%로 */
    font-size: 15px; /* 폰트 크기 축소 */
  }
`;
