import { useState, useEffect } from "react";
import axios from "axios";
import { Reset } from "styled-reset";
import { useLocation, useNavigate } from "react-router-dom";
import {
    BtnContainer, BtnContainer2, CIName, CName,
    Container, ContentWrapper, CWName, CWName2, DayBtn,
    Magnifier, ResultInstitutionName, ResultName,
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

            // 지역 및 스포츠 필터 추가 (검색어가 없을 경우만)
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

            const fullUrl = `http://127.0.0.1:5000/api/programs?${queryString}`;
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
                        <Search
                            placeholder="검색"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} // 검색어 업데이트
                        />
                        <Magnifier onClick={handleSearch}>🔍</Magnifier>
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
