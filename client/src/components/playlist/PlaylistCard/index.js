import React, {useEffect, useState} from 'react';
import * as S from './style';
import { useSelector } from 'react-redux';
import {playlistService} from "../../../services";
import dummy_card_image from '../../../../public/images/dummy_card_img.jpg';
import LikePlaylistButton from "./LikePlaylistButton";

function PlaylistCard({ listID }) {
    const username = useSelector(state => state.authentication.username);
    const [loading, setLoading] = useState(true);

    const [card, setCard] = useState({
        thumbnail: null,
        listName: null,
        listDesc: null, 
        username: null,
        like: null,
        dislike: null,
        likeCount: null
    })
    const [thumbnailImgURL, setThumbnailImgURL] = useState(null);

    useEffect(() => {
        playlistService.getPlaylistInfoByListID(listID, username)
            .then(response => {
                setCard(response);
                return playlistService.getPlaylistImgByFileName(response.thumbnail)
            })
            .then(response => {
                setThumbnailImgURL(response);
                return playlistService.getLikeCountByListID(listID)
            })
            .then(response => {
                setCard(card => ({
                    ...card,
                    likeCount: response[0]
                }))
                setLoading(false);
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
                <S.Separator/>
                <S.CardDesc> {card.listDesc} </S.CardDesc>
                <S.CardBottom>
                    <S.CardAuthor> by {card.username} </S.CardAuthor>
                    <LikePlaylistButton like={card.like} likeCount={card.likeCount}/>
                </S.CardBottom>
            </S.CardInfo>
        </S.CardWrapper>
        }
        </>
    );
}

export default PlaylistCard;