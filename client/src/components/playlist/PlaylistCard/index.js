import React from 'react';
import * as S from './style';

function PlaylistCard() {
    const card = {
        listName: "재생목록 제목이 ",
        listLike: 7,
        listDesc:
"그들의 품으며, 새 그러므 소담스러운 끓는 두손을 위하여, 싶이 그러므로 이것이다. 있는 관현악이며, 찬미를 천하를 살았으며, 동산에는 따뜻한 새 보라. 그것은 따뜻한 이상의 있는 그들은 현저하게"
        ,
        username: "jua0610",
        thumbnail: "https://cdn.pixabay.com/photo/2020/06/02/22/56/jellyfish-5252859_1280.jpg"
    }

    return (
        <S.CardWrapper>
            <S.CardImage src={card.thumbnail} alt="card_thumbnail"/>
            <S.CardInfo>
                <S.CardTitle> {card.listName} </S.CardTitle>
                <S.Seperator/>
                <S.CardDesc> {card.listDesc} </S.CardDesc>
                <S.CardAuthor>
                  <div> by {card.username} </div>
                  <div> <S.CardHeart/> {card.listLike} </div>
                </S.CardAuthor>
            </S.CardInfo>
        </S.CardWrapper>
    );
}

export default PlaylistCard;