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

const handleApplyClick = (url) => {
    try {
        window.open(url, "_blank"); // 새 탭에서 열기
    } catch (error) {
        console.error("URL을 여는 데 실패했습니다:", error);
        alert("URL을 열 수 없습니다.");
    }
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
    const [searchKeyword, setSearchKeyword] = useState(""); // 실제 검색에 사용되는 키워드
    const [inputKeyword, setInputKeyword] = useState(""); // 검색창에 입력 중인 키워드
    const [selectedDays, setSelectedDays] = useState([]);

    const itemsPerPage = 12;

    const daysOfWek = [
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
                    days: selectedDays,
                    page: page,
                    limit: itemsPerPage,
                    search: searchKeyword, // 실제 검색 키워드로 요청
                },
                paramsSerializer: paramsSerializer
            });

            const { data, total_count, total_pages } = response.data;
            setContentData(data);
            setTotalCount(total_count);
            setTotalPages(total_pages);
        } catch (error) {
            console.error("데이터를 불러오는 데 실패했습니다:", error);
        }
    }, [region, selectedDays, searchKeyword]);

    // 검색 버튼 또는 엔터를 눌렀을 때 검색 실행
    const handleSearch = () => {
        setSearchKeyword(inputKeyword); // 입력 중인 키워드를 실제 검색 키워드로 설정
        setCurrentPage(1); // 새로운 검색에서는 페이지를 1로 초기화
    };

    // 페이지 데이터 호출
    useEffect(() => {
        fetchPrograms(currentPage);
    }, [currentPage, fetchPrograms]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const toggleDaySelection = (day) => {
        setSelectedDays((prevSelectedDays) =>
            prevSelectedDays.includes(day)
                ? prevSelectedDays.filter((d) => d !== day)
                : [...prevSelectedDays, day]
        );
    };

    const placeholderText = source === "TrendPage" ? "종목을 검색해보세요." : "지역을 검색해보세요.";

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
                        <Search
                            placeholder={placeholderText}
                            value={inputKeyword}
                            onChange={(e) => setInputKeyword(e.target.value)} // 입력 중인 키워드 업데이트
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()} // 엔터 키로 검색 실행
                        />
                        <Magnifier onClick={handleSearch}> {/* 검색 버튼으로 검색 실행 */}
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="..." fill="#FC72C0" />
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
                                <CName>{item.SPORT}</CName>
                                <VirticalBar />
                                <CName>{item.PROGRM_ESTBL_WKDAY_NM}</CName>
                                <VirticalBar />
                                <CName>{item.FCLTY_ADDR}</CName>
                                <VirticalBar />
                                <button onClick={() => handleApplyClick(item.HMPG_URL)}>
                                    신청하러 가기
                                </button>
                            </ContentWrapper>
                        ))
                    )}
                </Container>
            </Wrapper>
        </>
    );
}
