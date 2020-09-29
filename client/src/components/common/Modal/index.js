import React, {useEffect} from 'react'
import Portal from "../Portal";
import * as S from "./style";

function Modal({ onClose, visible, children, width, max_width }) {
    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e)
        }
    };

    const close = (e) => {
        if (onClose) {
            onClose(e)
        }
    };

    useEffect(() => {
        if (visible) document.body.style.overflowY = 'hidden';
        return () => document.body.style.overflowY = 'auto';
    }, [visible]);

    return (
        <Portal elementId="modal-root">
            <S.ModalOverlay visible={visible}/>
            <S.ModalWrapper visible={visible}
                            onClick={onMaskClick}>
                <S.ModalInner width={width} max_width={max_width}>
                    <S.CloseButton onClick={close} />
                    {children}
                </S.ModalInner>
            </S.ModalWrapper>
        </Portal>
    )
}

export default Modal