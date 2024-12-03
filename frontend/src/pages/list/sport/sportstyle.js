import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;

  @media (max-width: 768px) {
    height: auto; /* 모바일에서 높이 제한 제거 */
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 85vh;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    height: auto; /* 모바일에서 높이 조정 */
  }
`;

export const LogoImg = styled.img`
  width: 150px;
  margin-left: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 120px; /* 모바일에서는 로고 크기 줄임 */
  }
`;

export const Title = styled.div`
  font-size: 25px;
  width: 30%;
  text-align: center;
  font-weight: bold;
  height: 30px;

  @media (max-width: 768px) {
    font-size: 20px; /* 모바일에서 글자 크기 줄임 */
    width: 80%; /* 모바일에서 폭을 넓힘 */
  }
`;

export const SportBtn = styled.button`
  width: 118px;
  height: 115px;
  background-color: #FFD4EC;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #001E5A;
  }

  &:hover span {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 80px; /* 모바일에서 버튼 크기 줄임 */
    height: 80px; /* 모바일에서 버튼 크기 줄임 */
  }
`;

export const BtnWrapper = styled.div`
  width: 80%;
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(7, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr); /* 모바일에서 3개씩 배치 */
    width: 100%; /* 모바일에서 폭을 100%로 */
  }

  & > *:nth-child(14n+8),
  & > *:nth-child(14n+9),
  & > *:nth-child(14n+10),
  & > *:nth-child(14n+11),
  & > *:nth-child(14n+12),
  & > *:nth-child(14n+13),
  & > *:nth-child(14n+14) {
    transform: translateX(70%);
  }
`;

export const SportImg = styled.img`
  width: 71px;
  height: 71px;
  object-fit: contain;
  position: absolute;
  z-index: 1;
  transition: opacity 0.3s ease;

  ${SportBtn}:hover & {
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    width: 50px; /* 모바일에서 이미지 크기 줄임 */
    height: 50px; /* 모바일에서 이미지 크기 줄임 */
  }
`;

export const SportName = styled.span`
  position: absolute;
  z-index: 2;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  opacity: 0; /* 초기 상태에서 텍스트 숨김 */
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    font-size: 14px; /* 모바일에서 글자 크기 줄임 */
  }
`;
