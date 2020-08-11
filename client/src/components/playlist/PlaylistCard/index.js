import React, {useEffect, useState} from 'react';
import * as S from './style';
import { useSelector } from 'react-redux';
import {playlistService} from "../../../services";
import dummy_card_image from '../../../../public/images/dummy_card_img.jpg';

function PlaylistCard({ listID }) {
    const username = useSelector(state => state.authentication.username);
    const [loading, setLoading] = useState(true);
    const [card, setCard] = useState({
        thumbnail: null,
        listName: null,
        listDesc: null, 
        username: null,
        like: null,
        dislike: null
    })
    const [thumbnailImgURL, setThumbnailImgURL] = useState(null);

    useEffect(() => {
        playlistService.getPlaylistInfoByListID(listID, username)
            .then(response => {
                setCard(response);
                setLoading(false);
                return playlistService.getPlaylistImgByFileName(response.thumbnail)
            })
            .then(response => {
                setThumbnailImgURL(response);
            })
    },[])

    return (
        <>
        {!loading &&
        <S.CardWrapper>
            {thumbnailImgURL
                ? <S.CardImage src={thumbnailImgURL} alt="card_thumbnail"/>
                : <S.CardImage src={dummy_card_image} alt="no_image"/>
            }
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
        }
        </>
    );
}

export default PlaylistCard;