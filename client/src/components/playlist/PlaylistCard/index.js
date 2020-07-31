import React from 'react';
import * as S from './style';

function PlaylistCard() {
    const card = {
        listName: "재생목록1",
        listDesc: "제가 만든 재생목록입니다",
        listLike: 7,
        thumbnail: "https://cdn.pixabay.com/photo/2020/06/02/22/56/jellyfish-5252859_1280.jpg"
    }

    return (
        <S.CardWrapper>
            <S.CardImg src={card.thumbnail}/>
            <S.CardInfo>
                <S.CardTitle> {card.listName} </S.CardTitle>
                <S.CardDesc> {card.listDesc} </S.CardDesc>
            </S.CardInfo>
            <S.CardHeart/>
        </S.CardWrapper>
    );
}

export default PlaylistCard;