/* eslint-disable */
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
    MapContainer,
    Sidebar,
    FacilityList,
    FacilityButton,
    LoadMoreButton,
    UpdateButton,
    MapView,
    TopContainer,
    BottomContainer,
    MyLocationButton,
} from './MapComponentStyle';
import { LogoContainer, LogoImg } from "../recomendation/result/resultstyle";
import Logo from "../../images/3355.png";

const MapComponent = () => {
    const navigate = useNavigate();
    const mapContainer = useRef(null);
    const mapInstance = useRef(null);
    const [facilities, setFacilities] = useState([]);
    const [filteredFacilities, setFilteredFacilities] = useState([]);
    const [visibleFacilities, setVisibleFacilities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showUpdateButton, setShowUpdateButton] = useState(false); // 업데이트 버튼 표시 여부
    const markers = useRef([]);
    const overlays = useRef([]);
    const currentLocationMarker = useRef(null); // 현재 위치 마커
    const ITEMS_PER_PAGE = 12;

    // 시설 데이터를 가져오는 함수
    const fetchFacilities = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/api/facilities");
            const data = await response.json();
            if (data && data.data) {
                setFacilities(data.data);
            }
        } catch (error) {
            console.error("Error fetching facility data:", error);
        }
    };

    const handleFacilityProgramClick = (facilityName) => {
        navigate('/list', { state: { source: 'MapPage', facility : facilityName } }); // 출처와 지역 정보 전달
    };

    // 지도 초기화 및 이벤트 설정
    useEffect(() => {
        if (!window.kakao) {
            console.error("카카오 맵 API가 로드되지 않았습니다.");
            return;
        }

        if (!mapInstance.current) {
            const initialCenter =
                facilities.length > 0
                    ? new window.kakao.maps.LatLng(facilities[0].FCLTY_LA, facilities[0].FCLTY_LO)
                    : new window.kakao.maps.LatLng(37.5665, 126.9780);

            const map = new window.kakao.maps.Map(mapContainer.current, {
                center: initialCenter,
                level: 10,
            });

            map.setMaxLevel(13);
            map.setMinLevel(3);
            mapInstance.current = map;

            // 지도 이동 이벤트 등록
            window.kakao.maps.event.addListener(map, "dragend", () => setShowUpdateButton(true));
        }

        if (facilities.length > 0) {
            addMarkers(facilities);
            updateFacilitiesInMapView();
        }
    }, [facilities]);

    // 마커 및 오버레이 추가
    const addMarkers = (facilities) => {
        const currentMap = mapInstance.current;
        markers.current.forEach((marker) => marker.setMap(null));
        overlays.current.forEach((overlay) => overlay.setMap(null));
        markers.current = [];
        overlays.current = [];

        facilities.forEach((facility) => {
            const position = new window.kakao.maps.LatLng(facility.FCLTY_LA, facility.FCLTY_LO);

            const marker = new window.kakao.maps.Marker({ position });
            marker.setMap(currentMap);
            markers.current.push(marker);

            // overlayContent를 DOM 요소로 생성
            const overlayContent = document.createElement('div');
            overlayContent.innerHTML = `
                <div style="padding:10px;background:white;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.3);">
                    <p style="margin:0; font-weight:600;">${facility.FCLTY_NM} 
                        <span >(${facility.INDUTY_NM})</span>
                    </p>
                    <p style="margin:0; font-size:12px; color:#555;">${facility.RDNMADR_NM}</p>
                    <button style="margin-top:5px;padding:10px;cursor:pointer;">강좌 보기</button>
                </div>
            `;

            // 버튼 클릭 시 handleFacilityProgramClick 함수 호출
            overlayContent.querySelector('button').addEventListener('click', () => {
                handleFacilityProgramClick(facility.FCLTY_NM);
            });

            const overlay = new window.kakao.maps.CustomOverlay({
                content: overlayContent,
                position,
                xAnchor: 0.5,
                yAnchor: 1.5,
                clickable: true,
            });

            window.kakao.maps.event.addListener(marker, "click", () => {
                overlays.current.forEach((o) => o.setMap(null));
                overlay.setMap(currentMap);
            });

            overlays.current.push(overlay);
            facility.overlay = overlay;
        });
    };

    // 현재 지도 범위 내 시설 업데이트
    const updateFacilitiesInMapView = useCallback(() => {
        const currentMap = mapInstance.current;
        if (!currentMap) return;

        const bounds = currentMap.getBounds();
        const filtered = facilities.filter((facility) => {
            const facilityPosition = new window.kakao.maps.LatLng(facility.FCLTY_LA, facility.FCLTY_LO);
            return bounds.contain(facilityPosition);
        });

        setFilteredFacilities(filtered);
        setCurrentPage(1);
        setShowUpdateButton(false); // 업데이트 버튼 숨김
    }, [facilities]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        setVisibleFacilities(filteredFacilities.slice(startIndex, endIndex));
    }, [filteredFacilities, currentPage]);

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handleFacilityClick = (facility) => {
        const position = new window.kakao.maps.LatLng(facility.FCLTY_LA, facility.FCLTY_LO);
        mapInstance.current.setCenter(position);
        mapInstance.current.setLevel(9);
        overlays.current.forEach((o) => o.setMap(null));
        if (facility.overlay) {
            facility.overlay.setMap(mapInstance.current);
        }
    };

    // 현재 위치로 이동
    const moveToCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;

                    const currentLocation = new window.kakao.maps.LatLng(lat, lon);
                    mapInstance.current.setCenter(currentLocation);
                    mapInstance.current.setLevel(9);

                    if (currentLocationMarker.current) {
                        currentLocationMarker.current.setMap(null);
                    }

                    const markerImage = new window.kakao.maps.MarkerImage(
                        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
                        new window.kakao.maps.Size(64, 69),
                        { offset: new window.kakao.maps.Point(27, 69) }
                    );

                    const marker = new window.kakao.maps.Marker({
                        position: currentLocation,
                        title: "현재 위치",
                        image: markerImage,
                    });

                    marker.setMap(mapInstance.current);
                    currentLocationMarker.current = marker;
                },
                (error) => {
                    alert("현재 위치를 가져올 수 없습니다.");
                    console.error(error);
                }
            );
        } else {
            alert("Geolocation을 지원하지 않는 브라우저입니다.");
        }
    };

    useEffect(() => {
        fetchFacilities();
    }, []);

    return (
        <MapContainer>
            <TopContainer>
                <LogoContainer>
                    <LogoImg src={Logo} onClick={() => navigate("/")} />
                </LogoContainer>
            </TopContainer>
            <BottomContainer>
                <Sidebar>
                    <MyLocationButton onClick={moveToCurrentLocation} style={{ marginBottom: "20px", padding: "10px", cursor: "pointer" }}>
                        내 위치로 이동
                    </MyLocationButton>
                    {visibleFacilities.length > 0 ? (
                        <FacilityList>
                            {visibleFacilities.map((facility, index) => (
                                <li key={index}>
                                    <FacilityButton onClick={() => handleFacilityClick(facility)}>
                                        {facility.FCLTY_NM}
                                    </FacilityButton>
                                </li>
                            ))}
                        </FacilityList>
                    ) : (
                        <p>현재 지도 영역에 체육시설이 없습니다.</p>
                    )}
                    {currentPage * ITEMS_PER_PAGE < filteredFacilities.length && (
                        <LoadMoreButton onClick={handleLoadMore}>더 보기</LoadMoreButton>
                    )}
                </Sidebar>
                <MapView ref={mapContainer}>
                    {showUpdateButton && (
                        <UpdateButton onClick={updateFacilitiesInMapView}>현 지도에서 시설 검색</UpdateButton>
                    )}
                </MapView>
            </BottomContainer>
        </MapContainer>
    );
};

export default MapComponent;
