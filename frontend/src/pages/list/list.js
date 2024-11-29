import { useState } from "react";
import { Reset } from "styled-reset";
import {
    AgeBtn, CIName, CName,
    Container, ContentWrapper, CWName,
    Magnifier, ResultInstitutionName, ResultName,
    ResultNameWrapper, ResultWName,
    Search,
    SearchBar,
    SelectAge,
    Title, VirticalBar,
    Wrapper
} from "./liststyle";
import { LogoContainer, LogoImg } from "../recomendation/result/resultstyle";
import Logo from "../../images/3355.png";
import { useNavigate } from "react-router-dom";

export default function ListPage() {
    const navigate = useNavigate();

    // 데이터 생성
    const contentData = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        institution: `기관이름 ${i + 1}`,
        sport: `종목 ${i + 1}`,
        day: `개설요일 ${i + 1}`,
        address: `주소 ${i + 1}`,
        website: "웹사이트 방문"
    }));

    // 페이지 상태 관리
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // 페이지별 데이터 계산
    const totalPages = Math.ceil(contentData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = contentData.slice(startIndex, endIndex);

    // 페이지 변경 핸들러
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <>
            <Reset />
            <Wrapper>
                <LogoContainer>
                    <LogoImg src={Logo} onClick={() => navigate("/")} />
                </LogoContainer>
                <Container>
                    <Title>대구 DAEGU</Title>
                    <SearchBar>
                        <Search placeholder="종목을 검색해보세요."/>
                        <Magnifier>
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.9 27L15.45 17.55C14.7 18.15 13.8375 18.625 12.8625 18.975C11.8875 19.325 10.85 19.5 9.75 19.5C7.025 19.5 4.719 18.556 2.832 16.668C0.945001 14.78 0.00100079 12.474 7.93651e-07 9.75C-0.000999206 7.026 0.943001 4.72 2.832 2.832C4.721 0.944 7.027 0 9.75 0C12.473 0 14.7795 0.944 16.6695 2.832C18.5595 4.72 19.503 7.026 19.5 9.75C19.5 10.85 19.325 11.8875 18.975 12.8625C18.625 13.8375 18.15 14.7 17.55 15.45L27 24.9L24.9 27ZM9.75 16.5C11.625 16.5 13.219 15.844 14.532 14.532C15.845 13.22 16.501 11.626 16.5 9.75C16.499 7.874 15.843 6.2805 14.532 4.9695C13.221 3.6585 11.627 3.002 9.75 3C7.873 2.998 6.2795 3.6545 4.9695 4.9695C3.6595 6.2845 3.003 7.878 3 9.75C2.997 11.622 3.6535 13.216 4.9695 14.532C6.2855 15.848 7.879 16.504 9.75 16.5Z" fill="#FC72C0" />
                            </svg>
                        </Magnifier>
                    </SearchBar>
                    <SelectAge>
                        <AgeBtn>성인</AgeBtn>
                        <AgeBtn>청소년</AgeBtn>
                        <AgeBtn>유아/어린이</AgeBtn>
                        <AgeBtn>노인</AgeBtn>
                        <AgeBtn>장애인</AgeBtn>
                    </SelectAge>
                    <ResultNameWrapper>
                        <ResultInstitutionName>기관이름</ResultInstitutionName>
                        <VirticalBar />
                        <ResultName>종목</ResultName>
                        <VirticalBar />
                        <ResultName>개설요일</ResultName>
                        <VirticalBar />
                        <ResultName>주소</ResultName>
                        <VirticalBar />
                        <ResultWName></ResultWName>
                    </ResultNameWrapper>
                    {currentData.map((item) => (
                        <ContentWrapper key={item.id}>
                            <CIName>{item.institution}</CIName>
                            <VirticalBar />
                            <CName>{item.sport}</CName>
                            <VirticalBar />
                            <CName>{item.day}</CName>
                            <VirticalBar />
                            <CName>{item.address}</CName>
                            <VirticalBar />
                            <CWName>{item.website}</CWName>
                        </ContentWrapper>
                    ))}

                    {/* 페이지네이션 버튼 */}
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom:"40px"}}>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i + 1}
                                style={{ margin: "0 5px", fontWeight: currentPage === i + 1 ? "bold" : "normal" }}
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}

                    </div>
                </Container>
            </Wrapper>
        </>
    );
}
