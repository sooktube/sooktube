import React, {useState} from 'react';
import {history} from "../../../../helpers";
import {useParams} from 'react-router-dom';
import * as S from './style';

function SearchTypeToggleButton({ setKeyword }) {
    const { type } = useParams();

    function handleVideoButtonClick() {
        setKeyword('');
        history.push('/search/video');
    }

    function handlePlaylistButton() {
        setKeyword('');
        history.push('/search/playlist');
    }

    return (
        <S.ButtonWrapper>
            <S.VideoButton on={type} onClick={handleVideoButtonClick}/>
            <S.PlaylistButton on={type} onClick={handlePlaylistButton}/>
        </S.ButtonWrapper>
    );
}

export default SearchTypeToggleButton;