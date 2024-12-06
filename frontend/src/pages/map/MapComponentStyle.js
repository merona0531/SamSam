import styled from 'styled-components';








// 전체 페이지 레이아웃
export const MapContainer = styled.div`
  display: flex;
  height: 100vh;
    flex-direction: column;
    overflow: hidden;
`;

export const TopContainer = styled.div`
    height: 90px; /* 고정된 높이 */
    padding-left: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center; /* 로고가 수직으로 가운데 오도록 설정 */
`;
export const BottomContainer = styled.div`
    display: flex;
    flex:1;
    flex-direction: row;
`

// 사이드바 스타일
export const Sidebar = styled.div`
  flex: 0.30;
    padding-left: 20px;
  background-color: #f0f0f0;
  height: 100%;
  overflow-y: scroll;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

// 시설 목록 리스트 스타일
export const FacilityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 15px;
  }
`;

// 시설 리스트 아이템 버튼 스타일
export const FacilityButton = styled.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  text-align: left;
  font-size: 16px;
    margin-left:10px;
    margin-right:10px;

  &:hover {
    background-color: #e9ecef;
  }
`;

// "더 보기" 버튼 스타일
export const LoadMoreButton = styled.button`
  padding: 10px;
  margin-top: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #0056b3;
  }
`;

// "업데이트" 버튼 스타일
export const UpdateButton = styled.button`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    padding: 12px 20px;
    background: #fc72c0;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    z-index: 1000; /* 지도 위에 표시되도록 설정 */

    &:hover {
        background: #d964a5;
    }
`;

// 지도 컨테이너 스타일
export const MapView = styled.div`
  flex: 0.7;
  height: 100%;
  background-color: #e9ecef; /* 지도 로드 전 기본 배경 */
    position: relative; /* 내부 절대 위치 요소를 위해 추가 */
`;

export const MyLocationButton = styled.button`
    margin-top: 20px;
    background: none; /* 배경 제거 */
    color: #000000; /* 텍스트 색상 검은색 */
    border: none; /* 테두리 제거 */
    font-size: 20px; /* 글자 크기 */
    cursor: pointer; /* 클릭 가능한 커서 */
    text-decoration: underline; /* 밑줄 추가 */
    text-decoration-thickness: 1px; /* 밑줄의 두께 설정 */
    text-underline-offset: 6px; /* 밑줄과 텍스트 사이의 간격 조정 */
    padding: 10px 0; /* 위아래 여백 */
    font-weight: bold; /* 글꼴 두껍게 설정 */
    transition: color 0.3s, text-decoration-color 0.3s; /* 부드러운 효과 */


    &::before {
        content: "";
        display: inline-block;
        width: 40px;
        height: 20px;
        background-image: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png');
        background-size: cover; /* 아이콘 크기 맞추기 */
        margin-right: 8px; /* 텍스트와 아이콘 간 간격 */
    }


    /* Sidebar의 가운데 위치 */
    display: block;
    margin-left: auto;
    margin-right: auto;
`;