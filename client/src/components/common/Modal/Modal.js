import React, {useEffect} from 'react'
import * as S from "./style";

function Modal({ onClose, visible, children}) {
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
        if (visible) document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'unset';
    }, [visible]);

    return (
        <>
            <S.ModalOverlay visible={visible}/>
            <S.ModalWrapper visible={visible}
                            onClick={onMaskClick}>
                <S.ModalInner>
                    <S.CloseButton onClick={close} />
                    {children}
                </S.ModalInner>
            </S.ModalWrapper>
        </>
    )
}

export default Modal