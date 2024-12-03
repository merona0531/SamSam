import { useState, useEffect, useCallback } from "react";
import { Reset } from "styled-reset";
import { useLocation } from "react-router-dom";
import {
    AgeBtn, CIName, CName,
    Container, ContentWrapper, CWName,
    Magnifier, ResultInstitutionName, ResultName,
    ResultNameWrapper, ResultWName,
    Search,
    SearchBar,
    SelectAge,
    Title, VirticalBar,
    Wrapper,
    DaySelectorContainer, DayLabel, DayButton
} from "./liststyle";
import { LogoContainer, LogoImg } from "../recomendation/result/resultstyle";
import Logo from "../../images/3355.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// paramsSerializer를 사용하여 days 파라미터가 여러 번 전달되도록 설정
const paramsSerializer = (params) => {
    const serializedParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
        if (Array.isArray(value)) {
            value.forEach(v => {
                serializedParams.append(key, v); // 동일한 key로 여러 값을 전달
            });
        } else {
            serializedParams.append(key, value);
        }
    }
    return serializedParams.toString();
};

export default function ListPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const { source, region, sport } = location.state || {};
    const title = source === 'TrendPage' ? region || "지역" : sport || "스포츠";

    const [contentData, setContentData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalCount, setTotalCount] = useState(0);


    const itemsPerPage = 12;

    const daysOfWeek = [
        { label: "월", value: "Mon" },
        { label: "화", value: "Tue" },
        { label: "수", value: "Wed" },
        { label: "목", value: "Thu" },
        { label: "금", value: "Fri" },
        { label: "토", value: "Sat" },
        { label: "일", value: "Sun" },
    ];

    // 데이터 호출 함수
    const fetchPrograms = useCallback(async (page) => {
        try {
            const response = await axios.get("http://localhost:5000/api/programs", {
                params: {
                    region: region || "",
                    time: "",
                    days: selectedDays, // 여러 값을 배열로 전달
                    page: page,
                    limit: itemsPerPage,
                },
                paramsSerializer: paramsSerializer // paramsSerializer 적용
            });

            const { data, total_count, total_pages } = response.data;
            setContentData(data);
            setTotalCount(total_count);
            setTotalPages(total_pages);
        } catch (error) {
            console.error("데이터를 불러오는 데 실패했습니다:", error);
        }
    }, [region, selectedDays]); // selectedDays가 변경될 때마다 fetchPrograms 함수가 새로 생성됨

    // 페이지 데이터 호출
    useEffect(() => {
        fetchPrograms(currentPage);
    }, [currentPage, fetchPrograms]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const placeholderText = source === "TrendPage" ? "종목을 검색해보세요." : "지역을 검색해보세요.";

    // 요일 선택 핸들러
    const toggleDaySelection = (day) => {
        setSelectedDays((prevSelectedDays) =>
            prevSelectedDays.includes(day)
                ? prevSelectedDays.filter((d) => d !== day) // 이미 선택된 요일은 제거
                : [...prevSelectedDays, day] // 선택된 요일 추가
        );
    };

    const handleApplyClick = (url) => {
        if (url) {
            window.open(url, "_blank");
        } else {
            alert("URL이 없습니다.");
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
                    <Title>{title}</Title>
                    <SearchBar>
                        <Search placeholder={placeholderText} />
                        <Magnifier>
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.9 27L15.45 17.55C14.7 18.15 13.8375 18.625 12.8625 18.975C11.8875 19.325 10.85 19.5 9.75 19.5C7.025 19.5 4.719 18.556 2.832 16.668C0.945001 14.78 0.00100079 12.474 7.93651e-07 9.75C-0.000999206 7.026 0.943001 4.72 2.832 2.832C4.721 0.944 7.027 0 9.75 0C12.473 0 14.7795 0.944 16.6695 2.832C18.5595 4.72 19.503 7.026 19.5 9.75C19.5 10.85 19.325 11.8875 18.975 12.8625C18.625 13.8375 18.15 14.7 17.55 15.45L27 24.9L24.9 27ZM9.75 16.5C11.625 16.5 13.219 15.844 14.532 14.532C15.845 13.22 16.501 11.626 16.5 9.75C16.499 7.874 15.843 6.2805 14.532 4.9695C13.221 3.6585 11.627 3.002 9.75 3C7.873 2.998 6.2795 3.6545 4.9695 4.9695C3.6595 6.2845 3.003 7.878 3 9.75C2.997 11.622 3.6535 13.216 4.9695 14.532C6.2855 15.848 7.879 16.504 9.75 16.5Z" fill="#FC72C0" />
                            </svg>
                        </Magnifier>
                    </SearchBar>

                    <DaySelectorContainer>
                        <DayLabel>요일 선택:</DayLabel>
                        {daysOfWeek.map((day) => (
                            <DayButton
                                key={day.value}
                                selected={selectedDays.includes(day.value)}
                                onClick={() => toggleDaySelection(day.value)}
                            >
                                {day.label}
                            </DayButton>
                        ))}
                    </DaySelectorContainer>

                    <ResultNameWrapper>
                        <ResultInstitutionName>기관이름</ResultInstitutionName>
                        <VirticalBar />
                        <ResultName>종목</ResultName>
                        <VirticalBar />
                        <ResultName>개설요일</ResultName>
                        <VirticalBar />
                        <ResultName>주소</ResultName>
                        <VirticalBar />
                        <ResultWName>신청하러가기</ResultWName>
                    </ResultNameWrapper>
                    {contentData.length === 0 ? (
                        <p>데이터가 없습니다.</p>
                    ) : (
                        contentData.map((item, index) => (
                            <ContentWrapper key={item.id || index}>
                                <CIName>{item.FCLTY_NM}</CIName>
                                <VirticalBar />
                                <CName>{item.PROGRM_NM}</CName>
                                <VirticalBar />
                                <CName>{item.PROGRM_ESTBL_WKDAY_NM}</CName>
                                <VirticalBar />
                                <CName>{item.FCLTY_ADDR}</CName>
                                <VirticalBar />
                                <button onClick={() => handleApplyClick(item.APPL_URL)}>
                                    신청하러 가기
                                </button>
                            </ContentWrapper>
                        ))
                    )}

                    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                        {/* 페이지네이션 버튼들 추가 */}
                    </div>
                </Container>
            </Wrapper>
        </>
    );
}
