import React, {useEffect, useState, Fragment} from 'react';
import * as S from './style';
import VideoList from "../VideoList";
import RecommendVideoButton from "../RecommendVideoButton";
import {playlistService} from "../../../services";
import { useSelector } from "react-redux";
import FallbackVideoList from "../FallbackVideoList";

function PlaylistVideo({ listID }) {
    const currentUsername = useSelector(state => state.authentication.username);

    const [videoList, setVideoList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPublic, setIsPublic] = useState(0);
    const [username, setUsername] = useState('');
    const [copied, setCopied] = useState(0);

    useEffect(() => {
        playlistService.getGTEQ5VideoList({listID, username: currentUsername, orderBy:'like',limit: 10,offset:0})
            .then(response => {
                setVideoList(response);
                setLoading(false);
            })
        playlistService.getPlaylistInfoByListID(listID, currentUsername)
            .then(response => {
                setIsPublic(response.isPublic);
                setUsername(response.username);
                setCopied(response.copied);
            })
    },[])

    return (
        <S.PlaylistVideoWrapper>
            <RecommendVideoButton listID={listID} isPublic={isPublic} username={username} copied={copied}/>
            {loading
                ? <FallbackVideoList marginLeft={0}/>
                : <Fragment>
                    {videoList.length === 0 && <S.IsVideo> 재생목록이 비어있군요🤔 </S.IsVideo>}
                    <VideoList username={username}
                               listID={listID}
                               playlist={1}
                               videoList={videoList}/>
                  </Fragment>
             }
        </S.PlaylistVideoWrapper>
    );
}

export default PlaylistVideo;