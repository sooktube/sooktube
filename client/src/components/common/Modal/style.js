import styled from "styled-components";
import {IoMdClose} from "react-icons/all";

export const ModalWrapper = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
`;

export const ModalOverlay = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(256, 256, 256, 0.6);
    z-index: 999;
`;

export const ModalInner = styled.div`
    box-sizing: border-box;
    position: relative;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    width: 420px;
    max-width: 480px;
    border-radius: 10px;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 20px 20px;
    &:focus {
        outline: none;
    }
`;

export const CloseButton = styled(IoMdClose)`
    float: right;
    height: 15px;
    width: 15px;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;