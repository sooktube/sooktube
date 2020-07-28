import React from 'react';
import ReactPlayer from 'react-player'

function VideoPlayer({url}){
    console.log(url);
    return (
        <ReactPlayer
            controls={true}
            url={url}
        />
    );
}

export default VideoPlayer;