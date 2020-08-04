import React, {useEffect, useState} from 'react';
import * as S from './style';
import {playlistService} from "../../../services";

function PlaylistCard({ listID }) {
    const [card, setCard] = useState({
        thumbnail: null,
        listName: null,
        listDesc: null,
        username: null,
        like: null,
        dislike: null
    })

    useEffect(() => {
        playlistService.getPlaylistInfoByListID(listID)
            .then(response => {
                setCard(response);
            })
    },[])

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