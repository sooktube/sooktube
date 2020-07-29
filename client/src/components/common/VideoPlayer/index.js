import React from 'react';
import ReactPlayer from 'react-player'

function VideoPlayer({url, width, height}){
    return (
        <ReactPlayer
            controls={true}
            url={url ? url : '/'}
            width={width}
            height={height}
        />
    );
}

export default VideoPlayer;