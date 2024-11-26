import styled from 'styled-components';

export const Wrapper=styled.div`
    width: 100%;
  min-height: 100vh;
`
export const Container=styled.div`
    display: flex;
`
export const Left=styled.div`
    width: 55%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const LogoImg=styled.img`
    width: 150px;
  margin-left: 10px;
  cursor: pointer;
`
export const Right=styled.div`
    background-color: #FDB9DF;
  width: 45%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg path:hover {
    fill: #FC72C0;
  }

`
export const LTop=styled.div`
  height: 35%;
  display: flex;
  flex-direction: column;
`
export const Title=styled.div`
    font-size: 30px;
  margin-left: 30px;
  margin-top: 10px;
`
export const SubTitle = styled.div`
  font-size: 18px;
  margin-left: 30px;
  margin-top: 30px;

`
export const GraphContainer=styled.div`
    width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Graph=styled.div`
  width: 321px;
  height: 325px;
  background-color: white;
  border-radius: 15px;
  border: 2px solid #fc72c0;
`
export const LBottom=styled.div`
    height: 65%;
  background-color: #001E5A;
  display: flex;
  flex-direction: column;

`