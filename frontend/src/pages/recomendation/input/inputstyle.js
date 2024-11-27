import styled from 'styled-components';

export const Wrapper=styled.div`
    width: 100%;
  min-height: 100vh;
  background-color: #001E5A;
  display: flex;
  flex-direction: column;
`

export const LogoImg=styled.img`
    width: 150px;
  margin-left: 10px;
  cursor: pointer;
`
export const Container=styled.div`
    width: 100%;
  height: 88vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
export const InputContainer=styled.div`
  width: 680px;
  height: 580px;
  background-color: white;
  border-radius: 165px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title=styled.div`
  font-size: 22px;
  margin-top: 80px;
  font-family: Title;
`

export const SubTitle=styled.div`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 30px;
  font-family: SubTitle;
`
export const InputWrapper=styled.div`
    margin-top: 10px;
`
export const InputName=styled.div`
  font-family: Regular;
`
export const Input=styled.input`
    width: 380px;
  height: 40px;
  border: 2px solid black;
  margin-top: 5px;
`
export const GenderBtn = styled.div`
  width: 45px;
  height: 45px;
  font-size: 18px;
  color: ${(props) => (props.selected ? "white" : "#001E5A")};
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  border: 2px solid black;
  background-color: ${(props) => (props.selected ? "#001E5A" : "white")};
  appearance: none;
  padding: 10px;
  cursor: pointer;
  margin-right: 10px;
`;
export const MbtiContainer=styled.div`
    margin-top: 10px;
    width: 380px;
  display: flex;
  align-items: center;
`

export const Mbti = styled.button`
    width: 45px;
  height: 45px;
    font-size: 18px;
    color: black;
    background-color: white;
    border-radius: 30px;
    appearance: none;
    position: relative;
    border: 2px solid black;
    cursor: pointer;
  margin-right: 5px;
`;

export const GoRecBtn=styled.button`
  width: 365px;
  height: 52px;
  border: none;
  background-color: #FDB9DF;
  border-radius: 30px;
  margin-top: 40px;
  font-size: 20px;
  cursor: pointer;
  font-family: SubTitle;
`