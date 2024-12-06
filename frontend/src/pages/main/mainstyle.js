import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    justify-content: center; /* 모바일에서는 중앙 정렬 */
    align-items: flex-start; /* 모바일에서 상단에 배치 */
  }
`;

export const MainImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;

  @media (max-width: 768px) {
    height: 80%;
  }
`;

export const LogoImg = styled.img`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 550px;
  z-index: 2;

  @media (max-width: 768px) {
    width: 300px; /* 모바일에서 로고 크기 축소 */
    top: 10px; /* 상단 여백 좁히기 */
  }
`;

export const RoundedRectangle = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column; /* 모바일에서 세로로 배치 */
    align-items: center; /* 모바일에서 중앙 정렬 */
  }
`;

export const ButtonContainer = styled.div`
  width: 630px;
  height: 428px;
  box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.5);
  background-color: rgba(253, 185, 223, 0.9);
  border-radius: 41px 0 0 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: 768px) {
    width: 90%; /* 모바일에서 너비 조정 */
    height: auto; /* 모바일에서 높이 자동 조정 */
    padding: 20px; /* 여백 추가 */
    border-radius: 20px; /* 모바일에서 둥글기 약간 축소 */
  }
`;

export const ButtonWrapper = styled.div`
  width: 411px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    width: 100%; /* 모바일에서 버튼 너비를 100%로 */
    gap: 20px; /* 모바일에서 버튼 간격 좁히기 */
  }
`;

export const ListButtonWrapper = styled.div`
  width: 500px;
  height: 165px;
  font-size: 22px;
  color: #000000;
  background-color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    width: 90%; /* 모바일에서 너비 축소 */
    height: auto; /* 모바일에서 높이 자동 조정 */
    font-size: 18px; /* 모바일에서 폰트 크기 줄이기 */
    padding: 10px; /* 모바일에서 패딩 추가 */
  }
`;

export const Button = styled.button`
  width: 450px;
  height: 65px;
  font-size: 22px;
  box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.5);
  color: #ffffff;
  background-color: #001e5a;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ff85c1;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 420px; /* 모바일에서 버튼 너비를 100%로 */
    font-size: 18px; /* 모바일에서 폰트 크기 줄이기 */
    height: 50px; /* 모바일에서 버튼 높이 줄이기 */
  }
`;

export const LButton = styled.button`
  width: 150px;
  height: 50px;
  font-size: 22px;
  background-color: #001e5a;
  box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 30px 0 0 30px;
  transition: all 0.2s ease-in-out;
  color: white;

  &:hover {
    background-color: #ff85c1;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
   width: 200px; /* 모바일에서 버튼 너비를 80%로 */
    font-size: 18px; /* 모바일에서 폰트 크기 줄이기 */
    height: 45px; /* 모바일에서 버튼 높이 줄이기 */
  }
`;

export const MButton = styled.button`
  width: 150px;
  height: 50px;
  font-size: 22px;
  background-color: #001e5a;
  box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.5);
  border: none;
  transition: all 0.2s ease-in-out;
  color: white;

  &:hover {
    background-color: #ff85c1;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
   width: 200px; /* 모바일에서 버튼 너비를 80%로 */
    font-size: 18px; /* 모바일에서 폰트 크기 줄이기 */
    height: 45px; /* 모바일에서 버튼 높이 줄이기 */
  }
`;
export const RButton = styled.button`
  width: 150px;
  height: 50px;
  font-size: 16px;
  background-color: #001e5a;
  box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 0 30px 30px 0;
  transition: all 0.2s ease-in-out;
  color: white;

  &:hover {
    background-color: #ff85c1;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
   width: 200px; /* 모바일에서 버튼 너비를 80%로 */
    font-size: 18px; /* 모바일에서 폰트 크기 줄이기 */
    height: 45px; /* 모바일에서 버튼 높이 줄이기 */
  }
`;
export const Title = styled.div`
  font-size: 18px;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 16px; /* 모바일에서 글자 크기 줄이기 */
  }
`;

export const Virtical=styled.div`
  width: 2px;
  height: 50px;
  background-color: white;
`