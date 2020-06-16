import styled from "styled-components";

export const ModalWrapper = styled.div`
    position:fixed;
    top: 0;
    bottom:0;
    left:0;
    right: 0;
`;

export const ModalBackdrop = styled.div`
    position:fixed;
    top: 0;
    bottom:0;
    left:0;
    right: 0;
    z-index: 100;
    background-color: rgba(0,0,0,0.5);
`;

export const ModalBox = styled.div`
    position: absolute;
    top: 20%;
    left: 26%;
    transform: translate()(-50%, -50%);
    min-height: 20%;
    width: 40%;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.25);
    z-index: 101;
    overflow-y: auto;
    padding: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;