import React, {useEffect, useState, useRef} from 'react';
import * as S from './style';
import { useSelector } from 'react-redux';
import {playlistService} from "../../../services";
import dummy_card_image from '../../../../public/images/dummy_card_img.jpg';
import LikePlaylistButton from "./LikePlaylistButton";
import useDropdownOutsideClick from "../../../hooks/useDropdownOutsideClick";
import {history} from "../../../helpers";

function PlaylistCard({ listID }) {
    const username = useSelector(state => state.authentication.username);
    const [loading, setLoading] = useState(true);
    const [createDropdownVisible, setCreateDropdownVisible] = useState(false);

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

    const toggleDropdown = () => {
        setCreateDropdownVisible(!createDropdownVisible);
    };
    const contentRef = useRef(null);
    
    useDropdownOutsideClick(contentRef, setCreateDropdownVisible);

    function EditClick(){
        history.push(`/@${card.username}/playlist/update/${listID}`);
    }

    function DeleteClick(){
        playlistService.deletePlaylist(listID)
        .then(response => {
            history.push(`/mypage`);
        })
    }

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
                    <S.EditWrapper>
                    {(card.username === username) && <S.DotIcon onClick={toggleDropdown}/> }
                    <LikePlaylistButton like={card.like} likeCount={card.likeCount}/>
                    </S.EditWrapper>
                    {createDropdownVisible &&
                    <S.CreateDropdownContent ref={contentRef}>
                        <S.EditButton onClick={EditClick}> 수정 </S.EditButton>
                        <S.EditButton  onClick={() => {
                            if(window.confirm('재생목록을 삭제하시겠습니까?')) DeleteClick()}}> 삭제</S.EditButton>
                    </S.CreateDropdownContent>}
                </S.CardBottom>
               
            </S.CardInfo>
        </S.CardWrapper>
        }
        </>
    );
}

export default PlaylistCard;