import React from 'react';
import * as S from "./style";

function YoutubeSearch(){
    return(
        <S.AddBox>
            <S.LinkInput placeholder="유튜브 링크를 입력하세요"></S.LinkInput>
            <S.AddButton>Add</S.AddButton>
        </S.AddBox>

    );
}

export default YoutubeSearch;