import styled from 'styled-components';

export const Wrapper=styled.div`
    width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`
export const Container=styled.div`
    width: 100%;
  display: flex;
  height: 88vh;
  justify-content: center;
  flex-direction: column;
align-items: center;  
`
export const LogoImg=styled.img`
    width: 150px;
  margin-left: 10px;
  cursor: pointer;
`
export const Title=styled.div`
  font-size: 25px;
  width: 97%;
  text-align: left;
font-weight: bold;
`


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
`;

export const BtnWrapper = styled.div`
  width: 80%;
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(7, 1fr); 

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
`;
