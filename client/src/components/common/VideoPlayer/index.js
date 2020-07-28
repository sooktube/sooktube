import React from 'react';
import ReactPlayer from 'react-player'


function VideoPlayer({url}){
    return (
        <ReactPlayer
            playsInline
            url={url}
        />
    );
}

export default VideoPlayer;