import React from 'react';
import ReactPlayer from 'react-player'

function VideoThumbnail({url, width, height}){
    return (
        <ReactPlayer
            controls={true}
            loop={true}
            playing={false}
            url={url ? url : '/'}
            width={width}
            height={height}
        />
    );
}

export default VideoThumbnail;