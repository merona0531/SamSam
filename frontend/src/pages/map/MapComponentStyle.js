import styled from 'styled-components';

// 전체 페이지 레이아웃
export const MapContainer = styled.div`
  display: flex;
  height: 100vh;
`;

// 사이드바 스타일
export const Sidebar = styled.div`
  flex: 0.32;
  background-color: #f0f0f0;
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
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
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
  text-align: left;
  font-size: 16px;

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
  padding: 10px;
  margin-top: 20px;
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #5a6268;
  }
`;

// 지도 컨테이너 스타일
export const MapView = styled.div`
  flex: 0.88;
  height: 100vh;
  background-color: #e9ecef; /* 지도 로드 전 기본 배경 */
`;
