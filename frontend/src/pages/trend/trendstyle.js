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
  border-radius: 70px 70px 0 0;
  align-items: center;

`
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
`;

export const ModalTitle = styled.h2`
  font-size: 35px;
  color: black;
  margin-top: 60px;
  margin-left: 30px;
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

export const MContent=styled.div`
  font-size: 18px;
  font-family: Regular;
  height: 200px;
  width: 85%;
  margin-top: 40px;
  margin-left: 30px;
  line-height: 1.5;
`
export const MLeft=styled.div`
  width: 60%;
  height: 100%;
`
export const MRight=styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ButtonWrapper=styled.div`
  height: 60%;
  width: 80%;
  margin-top: 50px;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 한 줄에 4개 */
  place-items: center;
`
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
`;