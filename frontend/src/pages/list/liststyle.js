import styled from 'styled-components';

export const Wrapper=styled.div`
    width: 100%;
  max-height: 100vh;
  height: 100vh;
  background-color: #001E5A;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #FC72C0;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }

`
export const Container=styled.div`
    display: flex;
  width: 100%;
  flex-direction: column;
align-items: center;
`
export const Title=styled.div`
  font-size: 55px;
  color: white;
  font-weight: bold;
  margin-top: 70px;
`
export const SearchBar=styled.div`
    width: 500px;
  height: 50px;
  margin-top: 50px;
  border: 2.5px solid #FC72C0;
  border-radius: 30px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`
export const Search=styled.input`
    width: 85%;
  background-color: transparent;
  margin-left: 20px;
  border: none;
  font-size: 17px;
  
  :focus {
    outline: none;
  }
`
export const Magnifier=styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
`
export const SelectAge=styled.div`
    display: flex;
  width: 750px;
  justify-content: space-between;
  margin-top: 30px;
`
export const AgeBtn=styled.button`
    width: 122px;
  height: 40px;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: none;
  border-radius: 30px;
  font-size: 17px;

`
export const ResultNameWrapper=styled.div`
    width: 924px;
  height: 60px;
  display: flex;
  align-items: center;
  margin-top: 40px;

`
export const ResultInstitutionName=styled.div`
    font-size: 20px;
  color: white;
  width: 231px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ResultName=styled.div`
    font-size: 20px;
  width: 158px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`
export const ResultWName=styled.div`
    font-size: 20px;
  width: 232px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`
export const VirticalBar=styled.div`
  width: 1px;
  height: 30px;
  background-color: #d9d9d9;
`
export const ContentWrapper=styled.div`
  width: 924px;
  height: 60px;
  background-color: white;
  border-radius: 0 30px 30px 0;
  display: flex;
  align-items: center;
  margin-bottom: 19px;
`

export const CIName=styled.div`
  font-size: 15px;
  width: 231px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CName=styled.div`
  font-size: 15px;
  width: 158px;
  display: flex;
  align-items: center;
  justify-content: center;

`
export const CWName=styled.div`
  font-size: 15px;
  width: 232px;
  display: flex;
  align-items: center;
  justify-content: center;

`



export const DaySelectorContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
`;

export const DayLabel = styled.span`
    font-size: 18px;
    margin-right: 10px;
`;

export const DayButton = styled.button`
    flex: 1;
    padding: 10px;
    margin: 0 0px;
    background-color: ${(props) => (props.selected ? "#FC72C0" : "#fff")};
    color: ${(props) => (props.selected ? "#fff" : "#000")};
    border: 1px solid #ccc;
    border-radius: 0px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: ${(props) => (props.selected ? "#FC72C0" : "#f0f0f0")};
    }
`;



