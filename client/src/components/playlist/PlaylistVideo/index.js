import React, {useEffect, useState} from 'react';
import * as S from './style';
import VideoList from "../VideoList";
import RecommendVideoButton from "../RecommendVideoButton";
import {playlistService} from "../../../services";
import {useSelector} from "react-redux";

function PlaylistVideo({ listID }) {
    const current_username = useSelector(state => state.authentication.username);

    const [videoList, setVideoList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ispublic, setIsPublic] = useState(0);
    const [username, setUsername] = useState('');
    const [copied, setCopied] = useState(0);

    useEffect(() => {
        playlistService.getGTEQ5VideoList(listID, current_username)
            .then(response => {
                setVideoList(response);
                setLoading(false);
            })
        playlistService.getPlaylistInfoByListID(listID, current_username)
            .then(response => {
                setIsPublic(response.isPublic);
                setUsername(response.username);
                setCopied(response.copied);
            })
    },[])

    return (
        <S.PlaylistVideoWrapper>
            <RecommendVideoButton listID={listID} isPublic={ispublic} username={username} copied={copied}/>
                {!loading &&
                    <>
                    { videoList.length === 0 && <S.IsVideo> 재생목록이 비어있군요🤔 </S.IsVideo>}
                    <VideoList videoList={videoList}/>
                    </>
                 }
        </S.PlaylistVideoWrapper>
    );
}

export default PlaylistVideo;