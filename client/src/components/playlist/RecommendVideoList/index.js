import React, {useEffect, useState} from 'react';
import {playlistService} from "../../../services";
import SearchListItem from "../SearchVideo/SearchListItem";

function RecommendVideoList({listID, username}) {
    const [videoList, setVideoList] = useState(null);

    useEffect(() => {
        playlistService.getGTEQ1LT5VideoList(listID, username)
            .then(response => {
                setVideoList(response);
            })
    })

    return (
        <>
            {videoList.map((result, index) =>
                <SearchListItem key={index}
                                videoID={result.videoID}
                                url={result.videoPath}
                                title={result.videoTitle}
                                username={result.username}
                                date={result.videoDate.substr(0,10)}
                                like={result.like}
                                dislike={result.dislike}
                />
            )}
        </>
    );
}

export default RecommendVideoList;
