import styled from 'styled-components';


export const Wrapper=styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
`

export const MainImg = styled.img`
    height: 100%;  
  width: 100%;
    object-fit: cover; 
    position: absolute;
`;


export const LogoImg = styled.img`
  position: absolute;
  top: 20px;  
  left: 50%;
  transform: translateX(-50%); 
  width: 550px;
    z-index: 2;,
`;

export const RoundedRectangle = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-end;

`;



export const ButtonContainer = styled.div`
    width: 592px;
  height: 428px;
  box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.5);
  background-color: rgba(253, 185, 223, 0.9); /* 투명도 50% */
  border-radius: 41px 0 0 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    gap: 40px; 
`;

export const ButtonWrapper = styled.div`
    width: 411px;  /* 버튼의 너비 */
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px
`;

export const ListButtonWrapper = styled.div`
  width: 430px;
  height: 165px; 
  font-size: 22px;
  color: #000000;
  background-color: #FFFFFF;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
`;
export const Button = styled.button`
  width: 411px;
  height: 70px; 
  font-size: 22px;
  color: #ffffff;
  background-color: #001E5A;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #FF85C1; /* 호버 효과 */
    transform: scale(1.05); /* 약간 확대 */
  }
  
`;
export const LButton=styled.button`
    width: 152px;
  height: 50px;
  font-size: 22px;
  background-color: #001E5A;
  border: none;
  border-radius: 30px;
  color: white;
  &:hover {
    background-color: #FF85C1; /* 호버 효과 */
    transform: scale(1.05); /* 약간 확대 */
  }
`

export const Title=styled.div`
  font-size: 18px;
    z-index: 2;
`