import styled from 'styled-components';

// 기본 스타일 (큰 화면)
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  @media (max-width: 768px) {
    /* 휴대폰 화면에서의 스타일 */
    min-height: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;

export const Left = styled.div`
  width: 55%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%; /* 모바일에서는 왼쪽 부분을 100%로 설정 */
    height: auto;
    padding: 20px;
  }
`;

export const Right = styled.div`
  background-color: #FDB9DF;
  width: 45%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%; /* 모바일에서는 오른쪽 부분을 100%로 설정 */
    height: auto; /* 모바일에서는 높이를 줄임 */
  }
`;

export const LogoImg = styled.img`
  width: 150px;
  margin-left: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 120px; /* 모바일에서는 로고 크기 조정 */
  }
`;

export const LTop = styled.div`
  height: 35%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto; /* 모바일에서 높이 조정 */
    margin-bottom: 20px;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  margin-left: 30px;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 24px; /* 모바일에서는 글자 크기 줄이기 */
    margin-left: 20px;
  }
`;

export const SubTitle = styled.div`
  font-size: 18px;
  margin-left: 30px;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 16px; /* 모바일에서는 서브타이틀 크기 조정 */
    margin-left: 20px;
  }
`;

export const GraphContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column; /* 모바일에서는 세로로 배치 */
  }
`;

export const Graph = styled.div`
  width: 321px;
  height: 325px;
  background-color: white;
  border-radius: 15px;
  border: 2px solid #fc72c0;

  @media (max-width: 768px) {
    width: 100%;
    height: 250px; /* 모바일에서 그래프 크기 조정 */
  }
`;

export const LBottom = styled.div`
  height: 65%;
  background-color: #001E5A;
  display: flex;
  flex-direction: column;
  border-radius: 70px 70px 0 0;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  width: 961px;
  height: 451px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  display: flex;
  text-align: left;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: 80%; /* 모바일에서 모달 크기 조정 */
  }
`;

export const ModalTitle = styled.h2`
  font-size: 35px;
  color: black;
  margin-top: 60px;
  margin-left: 30px;

  @media (max-width: 768px) {
    font-size: 28px; /* 모바일에서 타이틀 크기 조정 */
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: gray;

  &:hover {
    color: black;
  }
`;

export const HoverLabel = styled.div`
  position: absolute;
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 5px;
  font-size: 14px;
  z-index: 100;
  pointer-events: none;
`;

export const ButtonWrapper = styled.div`
  height: 60%;
  width: 80%;
  margin-top: 50px;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 한 줄에 4개 */
  place-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); 
    gap:10px;
  }
`;

export const RegionButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-color: #FDB9DF;
  color: black;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FC72C0;
  }

  @media (max-width: 768px) {
    width: 80px; 
    height: 35px;
  }
`;
