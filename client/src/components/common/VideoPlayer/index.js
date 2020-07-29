import React from 'react';
import ReactPlayer from 'react-player'

function VideoPlayer({url, width}){
    console.log(url);
    return (
        <ReactPlayer
            controls={true}
            url={url}
            width={width}
        />
    );
}

export default VideoPlayer;