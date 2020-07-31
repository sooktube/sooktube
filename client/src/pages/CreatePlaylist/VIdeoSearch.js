import React from 'react';
import * as S from "./style";

function VideoSearch(){

    


    return(
        <S.SearchBox>
            <S.SearchInput name="inputId" placeholder="동영상 제목을 입력하세요"></S.SearchInput>
            <S.AddButton>Search</S.AddButton>
        </S.SearchBox>

    );
}

export default VideoSearch;