import React, { memo } from 'react';
import * as S from "./style";
import { Link } from 'react-router-dom'
import {IoIosHeart} from "react-icons/all";

function CardItem({listID, listName, listDesc, src, like}) {
    return (
        <S.CardWrapper>
            <S.CardImageWrapper>
                <Link to={`/playlist/${listID}`}>
                    <img src={src} alt={`playlist_${listName}`}/>
                </Link>
            </S.CardImageWrapper>
            <S.CardInfo>
                <S.CardTitle>
                    {listName.length > 15 ?
                        listName.slice(0, 15)+'...' : listName }
                </S.CardTitle>
                <S.LikeWrapper>
                    <IoIosHeart/>
                    <span> {like} </span>
                </S.LikeWrapper>
                <S.CardDesc> {listDesc.slice(0,150)} </S.CardDesc>
            </S.CardInfo>
        </S.CardWrapper>
    );
}

export default memo(CardItem);