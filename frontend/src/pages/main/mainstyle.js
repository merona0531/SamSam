import styled from 'styled-components';


export const Wrapper=styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    margin: 0;
    position: relative;
`

export const MainImg = styled.img`
    height: 100%;  
    width: auto;  
    object-fit: cover; 
    position: absolute;
    left: -100px;

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
    
    width: 651px;
    height: 550px;
    background-color: #FDB9DF;
    position: absolute;
    bottom: 0px;  
    right: 0px;
    border-top-left-radius: 50%;

    min-width: 500px;
`;

export const Container = styled.div`
    width: 651px;
    height: 475px;
    position: absolute;
    bottom: 0px;  
    right: 0px;   
`;


export const ButtonContainer = styled.div`
    width: 100%;
    height: 80%;

    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    gap: 40px; 
`;

export const ButtonWrapper = styled.div`
    width: 411px;  /* 버튼의 너비 */
    height: 100vh; /* 버튼의 높이 (원하는 크기로 조정) */
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px
`;

export const Button = styled.button`
  width: 411px;
  height: 70px; 
  font-size: 22px;
  color: #000000;
  background-color: #FFFFFF;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #FF85C1; /* 호버 효과 */
    transform: scale(1.05); /* 약간 확대 */
  }
`;

export const Title=styled.div`
  font-size: 24px;
  margin-top: 250px;
    z-index: 2;
`