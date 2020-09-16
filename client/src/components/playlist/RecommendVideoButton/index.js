import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import * as S from './style';
import Modal from "../../common/Modal";
import SearchVideo from "../SearchVideo";
import {history} from "../../../helpers";

function RecommendVideoButton({listID, isPublic, username, copied}) {
    const [modalVisible, setModalVisible] = useState(false);
    const current_username = useSelector(state => state.authentication.username);

    const openModal = () => {
        setModalVisible(true)
    };

    const closeModal = () => {
        setModalVisible(false)
    };

    function copyPlaylist(){
        history.push(`/copy/playlist/${listID}`);
    }

    return (
        <S.AddVideoButtonWrapper>
            {isPublic}
            {(isPublic === 1 || current_username === username) &&
                <S.PlusButton onClick={openModal}/>}
            {modalVisible &&
                <Modal visible={modalVisible}
                       onClose={closeModal}
                       width="700px">
                    <SearchVideo listID={listID}/>
                </Modal>
            }
            {(isPublic === 1 || current_username === username) &&
                <>
                    <S.AddVideoComment> 재생목록에 추가하고 싶은 영상이 있나요? </S.AddVideoComment>
                    {copied === 0  && <S.CopyButton onClick={copyPlaylist}>PLAYLIST COPY</S.CopyButton>}
                </>
            }
        </S.AddVideoButtonWrapper>
    );
}

export default RecommendVideoButton;