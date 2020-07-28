import React from 'react';
import { Player } from 'video-react';

function VideoPlayer(url){
    return (
        <Player
            playsInline
            src={url}
        />
    );
}

export default VideoPlayer;