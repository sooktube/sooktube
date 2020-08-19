import React, {useEffect, useState} from 'react';
import * as S from './style';
import VideoList from "../VideoList";
import RecommendVideoButton from "../RecommendVideoButton";
import {playlistService} from "../../../services";
import {useSelector} from "react-redux";

function PlaylistVideo({ listID }) {
    const username = useSelector(state => state.authentication.username);

    const [videoList, setVideoList] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        playlistService.getGTEQ5VideoList(listID, username)
            .then(response => {
                setVideoList(response);
                setLoading(false);
            })
    },[])
    return (
        <S.PlaylistVideoWrapper>
            <RecommendVideoButton listID={listID}/>
                {!loading &&
                    <>
                    {videoList
                    ? <VideoList videoList={videoList}/>
                    : <S.IsVideo> 재생목록이 비어있군요🤔 </S.IsVideo>
                    }
                    </>
                 }
        </S.PlaylistVideoWrapper>
    );
}

export default PlaylistVideo;