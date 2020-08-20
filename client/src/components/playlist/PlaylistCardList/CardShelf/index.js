import React from 'react';
import * as S from "./style";
import {history} from "../../../../helpers";

function CardShelf({listID,listName,like,url}) {

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