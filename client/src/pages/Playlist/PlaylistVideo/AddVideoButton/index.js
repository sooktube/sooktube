import React, {useState} from 'react';
import * as S from './style';
import Modal from "../../../../components/common/Modal";
import SearchVideo from "../../../../components/video/SearchVideo";

function AddVideoButton() {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true)
    };
    const closeModal = () => {
        setModalVisible(false)
    };
    return (
        <S.AddVideoButtonWrapper>
            <S.PlusButton onClick={openModal}/>
            {modalVisible &&
            <Modal visible={modalVisible}
                   onClose={closeModal}
                   width="700px">
                <SearchVideo/>
            </Modal>
            }
            <S.AddVideoComment> 재생목록에 추가하고 싶은 영상이 있나요? </S.AddVideoComment>
        </S.AddVideoButtonWrapper>
    );
}

export default AddVideoButton;