import React, {useEffect, useState} from 'react';
import {playlistService} from "../../../services";
import VideoList from "../VideoList";

function RecommendVideoList({listID, username}) {
    const [videoList, setVideoList] = useState(null);

    useEffect(() => {
        playlistService.getGTEQ0LT5VideoList(listID, username)
            .then(response => {
                setVideoList(response);
            })
    },[])

    return (
        <>
            {videoList && videoList.length > 0 && <VideoList videoList={videoList} checkInPlaylist={true}/>}
        </>
    );
}

export default RecommendVideoList;
