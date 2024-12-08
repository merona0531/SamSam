import React from "react";
import {
    ModalOverlay, ModalContainer, ModalContent, CloseButton,
} from "./liststyle";

// 전화번호 포맷 함수
const formatPhoneNumber = (phone) => {
    if (!phone) return "정보 없음";

    // 소수점 제거 및 문자열로 변환
    const cleaned = phone.toString().split(".")[0];

    // 한국 전화번호 패턴에 맞게 포맷팅
    const match = cleaned.match(/(\d{2,3})(\d{3,4})(\d{4})/);
    return match ? `0${match[1]}-${match[2]}-${match[3]}` : "정보 없음";
};

const formatPrice = (price) => {
    return price ? `${price}원` : "정보 없음";
};

export default function Modal({ isOpen, onClose, data }) {
    if (!isOpen || !data) return null;

    return (
        <ModalOverlay>
            <ModalContainer>
                <CloseButton onClick={onClose}>×</CloseButton>
                <ModalContent>
                    <h2>상세정보</h2>
                    <p><strong>프로그램명:</strong> {data.PROGRM_NM}</p>
                    <p><strong>가격:</strong> {formatPrice(data.PROGRM_PRC)}</p>
                    <p><strong>대상:</strong> {data.PROGRM_TRGET_NM}</p>
                    <p><strong>주소:</strong> {data.FCLTY_ADDR}</p>
                    <p><strong>개설시간:</strong> {data.PROGRM_ESTBL_TIZN_VALUE}</p>
                    <p><strong>전화번호:</strong> {formatPhoneNumber(data.FCLTY_TEL_NO)}</p>
                    <p><strong>시설명:</strong> {data.FCLTY_NM}</p>
                    <p>
                        <strong>홈페이지:</strong>{" "}
                        {data.HMPG_URL ? (
                            <a href={data.HMPG_URL} target="_blank" rel="noopener noreferrer">
                                바로가기
                            </a>
                        ) : "정보 없음"}
                    </p>
                </ModalContent>
            </ModalContainer>
        </ModalOverlay>
    );
}
