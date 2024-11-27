import styled from 'styled-components';

export const Wrapper=styled.div`
    width: 100%;
  max-height: 100vh;
  background-color: #001E5A;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: GRAY; 
    border-radius: 10px; 
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0; 
  }
`
export const LogoContainer = styled.div`
  position: fixed; 
  left: 10px; 
  z-index: 100; 
  pointer-events: none;
`;

export const LogoImg = styled.img`
  width: 150px;
  cursor: pointer;
  pointer-events: auto; 
`;
export const Container=styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  
`
export const Container2=styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`
export const Title=styled.div`
  width: 100%;
  text-align: left;
  font-family: Title;
  font-size: 25px;
  margin-top: 50px;
  display: flex;
  margin-left: 100px;
  p{
    color: #FC72C0;
  }
`

export const Explane=styled.div`
  font-size: 16px;
  margin-top: 25px;
  width: 692px;
  line-height: 1.3;
  font-family: Regular;
`
export const MainImg=styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: pink;
  margin-top: 30px;
  border: 2px solid #FDB9DF;
`
export const Sub=styled.div`
    display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
`
export const SubWrapper=styled.div`
  display: flex;
  height: 230px;
  width: 90%;
  justify-content: space-around;
   margin-top: 30px;
  margin-bottom: 70px;
`
export const Number=styled.div`
    width: 100%;
  text-align: left;
`
export const SubImg=styled.img`
  width: 200px;
  min-height: 200px;
  border-radius: 50%;
  background-color: pink;
  border: 2px solid #FDB9DF;

`
export const Name=styled.div`
  margin-top: 10px;
  font-family: Regular;
`