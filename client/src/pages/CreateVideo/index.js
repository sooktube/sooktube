import React, {useRef, useState, useEffect} from 'react';
import {CreateVideoWrapper, UploadForm, UploadLogo, UploadInput,Label,InputTitle,UploadVideo,InputDesc,UploadButton, VideoName, ThumbnailWrapper, Thumbnail} from "./style";
import Header from "../../components/Header";

function VideoUpload(){
    const [input,setInput] = useState({
        videoTitle: null,
        videoDesc: null,
        videoDate: null,
        videoPath: null,
        fileName: null,
        userID: ''
    });

    const [state, setState] = useState({
        file: null,
        success: false,
    });

    function fileSelect(event){
        setInput({...input, videoPath: ' '+ event.target.files[0].name});
    }

    const canvas = useRef(null);
    const video = useRef(null);

    return(
        <CreateVideoWrapper>
            <Header/>
            <UploadLogo> UPLOAD THE VIDEO </UploadLogo>
            <UploadVideo>
                <Label>Choose video
                    <UploadInput useRef={video} type="file" onChange={fileSelect}/>
                </Label>
                {input.videoPath
                    ? <VideoName> {input.videoPath}</VideoName>
                    : <VideoName> 선택된 파일 없음 </VideoName>
                }
            </UploadVideo>
            <InputTitle type="text" placeholder="title" />
            <InputDesc cols="10" rows="5" placeholder="description" />
            <UploadButton>UPLOAD</UploadButton>
            <ThumbnailWrapper>
                <Thumbnail ref={canvas}/>
            </ThumbnailWrapper>
        </CreateVideoWrapper>
    );

}

export default VideoUpload;