import React from 'react';
import * as S from './style';

function AddVideo() {
    return (
        <S.AddVideoWrapper>
            <S.SearchBox>
                <S.SearchInput name="inputId" placeholder="동영상 제목을 입력하세요"/>
                <S.AddButton>Search</S.AddButton>
            </S.SearchBox>
        </S.AddVideoWrapper>
    );
}

export default AddVideo;