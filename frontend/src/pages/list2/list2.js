import { useState, useEffect } from "react";
import axios from "axios";
import { Reset } from "styled-reset";
import { useLocation, useNavigate } from "react-router-dom";
import {
    BtnContainer, BtnContainer2, CIName, CName,
    Container, ContentWrapper, CWName, CWName2, DayBtn,
    Magnifier, Magnifier2, ResultInstitutionName, ResultName,
    ResultNameWrapper, ResultWName, ResultWName2, Search,
    SearchBar, Select, SelectContainer, SelectDay,
    Title, VirticalBar, Wrapper,
} from "./liststyle";
import { LogoContainer, LogoImg } from "../recomendation/result/resultstyle";
import Logo from "../../images/3355.png";

export default function ListPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedAge, setSelectedAge] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedTime, setSelectedTime] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가
    const [currentSearch, setCurrentSearch] = useState(""); // 현재 검색어 표시용

    const { source, region, sport } = location.state || {};
    const title = currentSearch
        ? `검색어: ${currentSearch}`
        : (source === "TrendPage" ? region || "지역" : sport || "스포츠");

    // 요일 변환 함수
    const convertDayToCode = (day) => {
        const dayMap = {
            "월": "Mon",
            "화": "Tue",
            "수": "Wed",
            "목": "Thu",
            "금": "Fri",
            "토": "Sat",
            "일": "Sun",
        };
        return dayMap[day];
    };

    // 연령대 변환 함수
    const convertAgeToTarget = (age) => {
        const ageMap = {
            "성인": "adult",
            "청소년": "teen",
            "유아/어린이": "child",
            "노인": "senior",
            "장애인": "disable",
        };
        return ageMap[age];
    };

    const convertRegion = (region) => {
        const regionMap = {
            대구: "대구광역시",
            부산: "부산광역시",
            서울: "서울특별시",
            울산: "울산광역시",
            대전: "대전광역시",
            인천: "인천광역시"
        };
        return regionMap[region] || region;
    };

    // API 요청 함수
    const fetchData = async () => {
        try {
            const daysParam = selectedDays.map((day) => convertDayToCode(day)); // 요일 변환
            const params = {
                time:
                    selectedTime === "오전"
                        ? "morning"
                        : selectedTime === "오후"
                            ? "afternoon"
                            : undefined,
                target: convertAgeToTarget(selectedAge), // 연령대 변환
                page: currentPage,
                limit: 20,
                search: currentSearch || undefined, // 검색어 추가
            };

            if (!currentSearch) {
                if (source === "TrendPage") {
                    params.region = convertRegion(title);
                } else {
                    params.sport = title;
                }
            }

            // 쿼리 문자열 생성
            let queryString = Object.entries(params)
                .filter(([_, value]) => value !== undefined && value !== "")
                .map(([key, value]) =>
                    Array.isArray(value)
                        ? value.map((v) => `${key}=${v}`).join("&")
                        : `${key}=${value}`
                )
                .join("&");

            // 요일 필터 추가
            const daysQueryString = daysParam.map((day) => `days=${day}`).join("&");
            if (daysQueryString) {
                queryString += `&${daysQueryString}`;
            }

            const fullUrl = `https://samsam.up.railway.app/api/programs${queryString}`;
            console.log("요청 URL:", fullUrl);

            const response = await axios.get(fullUrl);
            setData(response.data.data || []);
            console.log(response.data.data);

            setTotalPages(Math.ceil((response.data.total || 0) / 20));
        } catch (error) {
            console.error("데이터 가져오기 오류:", error);
        }
    };

    
    // 선택된 요일 토글
    const toggleDay = (day) => {
        setSelectedDays((prev) =>
            prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
        );
    };

    // 검색 버튼 클릭 핸들러
    const handleSearch = () => {
        setCurrentSearch(searchQuery);
        setCurrentPage(1); // 검색어 변경 시 첫 페이지로 이동
    };

    useEffect(() => {
        fetchData();
    }, [selectedAge, selectedDays, selectedTime, currentPage, currentSearch]);

    const handleAgeChange = (e) => setSelectedAge(e.target.value);
    const handleTimeChange = (e) => setSelectedTime(e.target.value);

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
                        <Magnifier2>
                            <option value="">{title}</option>
                            <option value="성인">전체</option>
                        </Magnifier2>
                        <Search
                            placeholder="검색"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} // 검색어 업데이트
                        />
                        <Magnifier onClick={handleSearch}>
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.9 27L15.45 17.55C14.7 18.15 13.8375 18.625 12.8625 18.975C11.8875 19.325 10.85 19.5 9.75 19.5C7.025 19.5 4.719 18.556 2.832 16.668C0.945001 14.78 0.00100079 12.474 7.93651e-07 9.75C-0.000999206 7.026 0.943001 4.72 2.832 2.832C4.721 0.944 7.027 0 9.75 0C12.473 0 14.7795 0.944 16.6695 2.832C18.5595 4.72 19.503 7.026 19.5 9.75C19.5 10.85 19.325 11.8875 18.975 12.8625C18.625 13.8375 18.15 14.7 17.55 15.45L27 24.9L24.9 27ZM9.75 16.5C11.625 16.5 13.219 15.844 14.532 14.532C15.845 13.22 16.501 11.626 16.5 9.75C16.499 7.874 15.843 6.2805 14.532 4.9695C13.221 3.6585 11.627 3.002 9.75 3C7.873 2.998 6.2795 3.6545 4.9695 4.9695C3.6595 6.2845 3.003 7.878 3 9.75C2.997 11.622 3.6535 13.216 4.9695 14.532C6.2855 15.848 7.879 16.504 9.75 16.5Z" fill="#FC72C0" />
                            </svg>
                        </Magnifier>
                    </SearchBar>
                    <BtnContainer>
                        <SelectContainer>
                            <Select value={selectedAge} onChange={handleAgeChange}>
                                <option value="">연령대 선택</option>
                                <option value="성인">성인</option>
                                <option value="청소년">청소년</option>
                                <option value="유아/어린이">유아/어린이</option>
                                <option value="노인">노인</option>
                                <option value="장애인">장애인</option>
                            </Select>
                        </SelectContainer>
                        <BtnContainer2>
                            <SelectContainer>
                                <Select value={selectedTime} onChange={handleTimeChange}>
                                    <option value="">시간대 선택</option>
                                    <option value="오전">오전</option>
                                    <option value="오후">오후</option>
                                </Select>
                            </SelectContainer>
                        </BtnContainer2>
                        <SelectDay>
                            {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
                                <DayBtn
                                    key={day}
                                    isSelected={selectedDays.includes(day)}
                                    onClick={() => toggleDay(day)}
                                >
                                    {day}
                                </DayBtn>
                            ))}
                        </SelectDay>
                    </BtnContainer>
                    <ResultNameWrapper>
                        <ResultInstitutionName>기관이름</ResultInstitutionName>
                        <VirticalBar />
                        <ResultName>종목</ResultName>
                        <VirticalBar />
                        <ResultName>개설요일</ResultName>
                        <VirticalBar />
                        <ResultName>개설시간</ResultName>
                        <VirticalBar />
                        <ResultWName2>주소</ResultWName2>
                        <VirticalBar />
                        <ResultWName>웹사이트</ResultWName>
                    </ResultNameWrapper>
                    {data.map((item, index) => ( // 인덱스 추가
                        <ContentWrapper key={`${item.CTPRVN_CD}-${index}`}>
                            <CIName>{item.FCLTY_NM}</CIName>
                            <VirticalBar />
                            <CName>{item.SPORT}</CName>
                            <VirticalBar />
                            <CName>{item.PROGRM_ESTBL_WKDAY_NM}</CName>
                            <VirticalBar />
                            <CName>{item.PROGRM_ESTBL_TIZN_VALUE}</CName>
                            <VirticalBar />
                            <CWName2>{item.FCLTY_ADDR}</CWName2>
                            <VirticalBar />
                            <CWName>
                                <a href={item.HMPG_URL} target="_blank" rel="noopener noreferrer">
                                    방문하기
                                </a>
                            </CWName>
                        </ContentWrapper>
                    ))}
                    <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                style={{ margin: "0 5px", fontWeight: currentPage === i + 1 ? "bold" : "normal" }}
                                onClick={() => setCurrentPage(i + 1)}
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
