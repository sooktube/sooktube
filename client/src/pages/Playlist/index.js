import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlaylistInfo from "../../components/playlist/PlaylistInfo";
import PlaylistVideo from "../../components/playlist/PlaylistVideo";
import Header from "../../components/base/Header";
import * as S from './style';
import { commentService } from "../../services/comment.service";

function Playlist() {
    const { listID } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        commentService.getCommentInfoByPlaylistID(listID)
        .then(response => {
            dispatch({type:'INIT',value:response});
        })    
    },[])

    return (
        <>
            <Header/>
            <S.PlaylistWrapper>
              <PlaylistInfo listID={listID}/>
              <PlaylistVideo listID={listID}/>
            </S.PlaylistWrapper>
        </>
    );
}

export default Playlist;