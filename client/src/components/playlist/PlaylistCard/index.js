import React, {useEffect, useState, useRef} from 'react';
import * as S from './style';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {playlistService} from "../../../services";
import dummy_card_image from '../../../../public/images/dummy_card_img.jpg';
import LikePlaylistButton from "./LikePlaylistButton";
import useDropdownOutsideClick from "../../../hooks/useDropdownOutsideClick";
import {history} from "../../../helpers";
import FallbackPlaylistCard from "../FallbackPlaylistCard";

function PlaylistCard({ listID }) {
    const username = useSelector(state => state.authentication.username);

    const [loading, setLoading] = useState(true);
    const [createDropdownVisible, setCreateDropdownVisible] = useState(false);
    const [originalListID, setOriginalListID] = useState(0);
   
    const [card, setCard] = useState({
        thumbnail: null,
        listName: null,
        listDesc: null, 
        username: null,
        like: null,
        dislike: null,
        likeCount: null,
        copied:null
    })
    const [thumbnailImgURL, setThumbnailImgURL] = useState(null);

    useEffect(() => {
        playlistService.getPlaylistInfoByListID(listID, username)
            .then(response => {
                setCard(response);
                Promise.all([
                    playlistService.getPlaylistImgByFileName(response.thumbnail),
                    playlistService.getLikeCountByListID(listID),
                    playlistService.getOriginalListID(listID)
                ]).then(response => {
                    setThumbnailImgURL(response[0]);
                    setCard(card => ({
                        ...card,
                        likeCount: response[1][0]
                    }))
                    setOriginalListID(response[2]);
                    setLoading(false);
                })
            })
    },[])

    const toggleDropdown = () => {
        setCreateDropdownVisible(!createDropdownVisible);
    };
    const contentRef = useRef(null);

    useDropdownOutsideClick(contentRef, setCreateDropdownVisible);

    function EditClick(){
        history.push(`/@${card.username}/update/playlist/${listID}`);
    }

    function DeleteClick(){
        playlistService.deletePlaylist(listID)
        .then(() => {
            history.push(`/@${username}/profile/playlist`);
        })
    }

    return (
        <>
        {loading
        ? <FallbackPlaylistCard/>
        : <S.CardWrapper>
            {thumbnailImgURL
                ? <S.CardImage src={thumbnailImgURL} alt="card_thumbnail"/>
                : <S.CardImage src={dummy_card_image} alt="no_image"/>
            }
            <S.CardInfo>
                <S.CardTitle> 
                    <S.Text>{card.listName.length > 26 ? card.listName.slice(0,26)+'...' : card.listName}</S.Text> 
                </S.CardTitle>
                {card.copied === 1 && <S.CardCopied> 복사본 </S.CardCopied>}
                <S.Separator/>
                <S.CardDesc>
                    {card.copied === 1 &&
                        <a href={`playlist/${originalListID}`} target="_blank" rel="noopener noreferrer">
                            <S.OriginalPageText>Original Page Link</S.OriginalPageText>
                            <S.OriginalLink/>
                        </a>
                    }
                <div>{card.listDesc.length > 110 ? card.listDesc.slice(0,110)+'...' : card.listDesc} </div>
                </S.CardDesc> 
                <S.CardBottomWrapper>
                <S.CardBottom>
                    <S.CardAuthor>
                        <Link to={`/@${card.username}/profile/playlist`}>
                            by {card.username}
                        </Link>
                    </S.CardAuthor>
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
                </S.CardBottomWrapper>
            </S.CardInfo>
        </S.CardWrapper>
        }
        </>
    );
}

export default PlaylistCard;