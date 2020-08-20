import React, { useState, useEffect } from 'react';
import * as S from "./style";
import {history} from "../../../../helpers";
import {playlistService} from "../../../../services";

function CardShelf({listID, listName, url}) {
    const [like,setLike] = useState(0);

    useEffect(()=>{
        playlistService.getLikeCountByListID(listID)
        .then((response=>{
            console.log(response[0]);
            setLike(response[0]);
        }))
    });

    function handleClick(){
        history.push(`/playlist/${listID}`);
      }
    
    return (
            <S.CardWrapper>
                <S.CardImg src={url} onClick={handleClick}/>
                <S.CardInfo>
                    <S.CardTitle> {listName.length > 15 ? listName.slice(0, 15)+'...' : listName }</S.CardTitle>
                    <S.likeCount>{like}</S.likeCount>
                </S.CardInfo>
                <S.CardHeart/>
            </S.CardWrapper>
    );
}

export default CardShelf;