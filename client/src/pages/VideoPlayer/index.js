import React, { useState, useEffect } from 'react';
import { Player } from 'video-react';

function VideoPlayer(){
    return (
        <Player
            playsInline
            src="https://storage.googleapis.com/soktube.appspot.com/README%ED%8C%80_%EC%8B%9C%EC%97%B0%EC%98%81%EC%83%81.mp4"
        />
    );
}

export default VideoPlayer;