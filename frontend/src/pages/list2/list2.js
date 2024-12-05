import { useState, useEffect } from "react";
import axios from "axios";
import { Reset } from "styled-reset";
import { useLocation, useNavigate } from "react-router-dom";
import {
    BtnContainer, BtnContainer2, CIName, CName,
    Container, ContentWrapper, CWName, DayBtn,
    Magnifier, ResultInstitutionName, ResultName,
    ResultNameWrapper, ResultWName, Search,
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

    const { source, region, sport } = location.state || {};
    const title = source === "TrendPage" ? region || "지역" : sport || "스포츠";

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
            // 필요한 경우 추가 지역을 여기에 추가
        };
        return regionMap[region] || region;  // 변환된 값이 없다면 원래 값을 반환
    };

    // API 요청 함수
    const fetchData = async () => {
        try {
            const daysParam = selectedDays.map((day) => convertDayToCode(day));
            const params = {
                region: source === "TrendPage" ? convertRegion(title) : undefined,
                sport: source === "SportPage" && title ? title : undefined,
                time:
                    selectedTime === "오전"
                        ? "morning"
                        : selectedTime === "오후"
                            ? "afternoon"
                            : undefined,
                target: convertAgeToTarget(selectedAge),
                page: currentPage,
                limit: 20,
            };

            const queryString = Object.entries(params)
                .filter(([_, value]) => value !== undefined && value !== "")
                .map(([key, value]) =>
                    Array.isArray(value)
                        ? value.map((v) => `${key}=${v}`).join("&")
                        : `${key}=${value}`
                )
                .join("&");

            const daysQueryString = daysParam.map((day) => `days=${day}`).join("&");

            const fullUrl = `http://127.0.0.1:5000/api/programs?${queryString}&${daysQueryString}`;
            console.log("요청 URL:", fullUrl);

            const response = await axios.get(fullUrl);  // 여기에 수정된 URL 사용
            console.log("서버 응답 데이터:", response.data);

            // 데이터 업데이트 후 콘솔 로그
            setData(response.data.data || []);
            console.log("상태에 반영된 데이터:", response.data.data);

            // 페이지 수 계산
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

    // 필터 변경 또는 페이지 이동 시 데이터 요청
    useEffect(() => {
        console.log("필터 또는 페이지 변경 시 fetchData 호출");
        fetchData();
    }, [selectedAge, selectedDays, selectedTime, currentPage, title]);

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
                        <Search placeholder={`검색`} />
                        <Magnifier></Magnifier>
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
                        <ResultName>주소</ResultName>
                        <VirticalBar />
                        <ResultWName>웹사이트</ResultWName>
                    </ResultNameWrapper>
                    {data.map((item) => (
                        <ContentWrapper key={item.CTPRVN_CD}>
                            <CIName>{item.FCLTY_NM}</CIName>
                            <VirticalBar />
                            <CName>{item.SPORT}</CName>
                            <VirticalBar />
                            <CName>{item.PROGRM_ESTBL_WKDAY_NM}</CName>
                            <VirticalBar />
                            <CName>{item.PROGRM_ESTBL_TIZN_VALUE}</CName>
                            <VirticalBar />
                            <CName>{item.FCLTY_ADDR}</CName>
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
