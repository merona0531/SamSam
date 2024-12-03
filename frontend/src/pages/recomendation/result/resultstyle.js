import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-height: 100vh;
  background-color: #001e5a;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }
`;

export const LogoContainer = styled.div`
  position: fixed;
  left: 10px;
  z-index: 100;
  pointer-events: none;

  @media (max-width: 768px) {
    left: 5px;
  }
`;

export const LogoImg = styled.img`
  width: 150px;
  cursor: pointer;
  pointer-events: auto;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column; /* 모바일 화면에선 컬럼 정렬 */

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const Container2 = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px; /* 모바일 화면에 여백 추가 */
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: left;
  font-family: Title;
  font-size: 25px;
  margin-top: 50px;
  display: flex;
  margin-left: 100px;

  p {
    color: #fc72c0;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 20px;
  }
`;

export const Explane = styled.div`
  font-size: 16px;
  margin-top: 25px;
  width: 692px;
  line-height: 1.3;
  font-family: Regular;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 14px;
  }
`;

export const MainImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: pink;
  margin-top: 30px;
  border: 2px solid #fdb9df;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const Sub = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
`;

export const SubWrapper = styled.div`
  display: flex;
  height: 230px;
  width: 90%;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 70px;

  @media (max-width: 768px) {
    align-items: center;
    height: auto;
  }
`;

export const Number = styled.div`
  width: 100%;
  text-align: left;
`;

export const SubImg = styled.img`
  width: 200px;
  min-height: 200px;
  border-radius: 50%;
  background-color: pink;
  border: 2px solid #fdb9df;

  @media (max-width: 768px) {
    width: 100px;
    min-height: 100px;
  }
`;

export const Name = styled.div`
  margin-top: 10px;
  font-family: Regular;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
