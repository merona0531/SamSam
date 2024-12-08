import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-height: 100vh;
  height: 100vh;
  background-color: #001e5a;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fc72c0;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 55px;
  color: white;
  font-weight: bold;
  margin-top: 70px;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 30px;
  }
`;

export const SearchBar = styled.div`
  width: 710px;
  height: 50px;
  margin-top: 50px;
  border: 2.5px solid #fc72c0;
  border-radius: 30px;
  background-color: white;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 20px;
  }
`;

export const Search = styled.input`
  width: 90%;
  background-color: transparent;
  margin-left: 20px;
  border: none;
  font-size: 17px;

  :focus {
    outline: none;
  }
`;

export const Magnifier = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SelectDay = styled.div`
  display: flex;
  width: 350px;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

export const DayBtn = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: none;
  border-radius: 50px;
  font-size: 17px;
  background-color: ${({ isSelected }) => (isSelected ? "#fdb9df" : "white")};
  border: ${({ isSelected }) => (isSelected ? "2px solid #fc72c0" : "none")};

  &:hover {
    cursor: pointer;
  }
`;

export const ResultNameWrapper = styled.div`
  width: 1215px;
  height: 60px;
  display: flex;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    width: 95%;
    flex-wrap: wrap;
  }
`;

export const ResultInstitutionName = styled.div`
  font-size: 20px;
  color: white;
  width: 231px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 90px;
  }
`;

export const ResultName = styled.div`
  font-size: 20px;
  width: 158px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 70px;
  }
`;

export const ResultWName = styled.div`
  font-size: 20px;
  width: 232px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
    width: auto;
  }
`;
export const ResultWName2 = styled.div`
  font-size: 20px;
  width: 273px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
    width: auto;
  }
`;

export const VirticalBar = styled.div`
  width: 1px;
  height: 30px;
  background-color: #d9d9d9;

  @media (max-width: 768px) {
    height: 15px;
  }
`;



export const ContentWrapper = styled.div`
  width: 1215px;
  height: 60px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 7px;

  @media (max-width: 768px) {
    width: 95%;
    height: auto;
    align-items: flex-start;
    display: flex;
    padding: 10px;
    border-radius: 10px;
  }
`;

export const CIName = styled.div`
  font-size: 15px;
  width: 231px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90px;
    font-size: 14px;
  }
`;

export const CName = styled.div`
  font-size: 15px;
  width: 158px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 70px;
    font-size: 14px;
  }
`;

export const CWName = styled.div`
  font-size: 15px;
  width: 232px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: auto;
    font-size: 14px;
  }
`;
export const CWName2 = styled.div`
  font-size: 15px;
  width: 273px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: auto;
    font-size: 14px;
  }
`;


export const BtnContainer = styled.div`
  display: flex;
  width: 900px;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    gap: 10px;
  }
`;

export const BtnContainer2 = styled.div`
  align-items: center;
  justify-content: flex-end;
  //display: ${({ show }) => (show ? "flex" : "none")};

  @media (max-width: 768px) {
    width: 90%;
    justify-content: center;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  width: 250px;
  height: 50px;
  border-radius: 15px;
  border: 3px solid #d9d9d9;
  background-color: white;
  padding: 14px;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchData=styled.div`
  width: 680px;
  text-align: left;
  margin: 10px 0;
  font-size: 16px;
  color: white;
`
export const PageNumber=styled.button`
    margin: 0 5px;
  background: none;
  border: none;
`
export const NextBtn=styled.button`
  color: white;
  background: none;
  border: none;
`

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    background: white;
    width: 500px;
    max-width: 90%;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    position: relative;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
`;

export const ModalContent = styled.div`
    h2 {
      font-size: 25px;
      margin-bottom: 20px;
      font-weight: bold;
    }

    p {
        margin: 10px 0;
    }

    a {
        color: #fc72c0;
        text-decoration: none;
        font-weight: bold;
    }
    strong{
      font-weight: bold;
    }
`;
