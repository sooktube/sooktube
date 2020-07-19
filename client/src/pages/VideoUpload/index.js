import React from 'react';
import {VideoUploadWrapper, FileInfo, UploadForm, UploadLogo, UploadInput,Label, fileInput,InputTitle,UploadVideo} from "./style";
import { useState } from 'react';
import Header from "../../components/Header";

function VideoUpload(){
    const [input,setInput]=useState({
        videoTitle: null,
        videoDesc: null,
        videoDate: null,
        videoPath: ' 선택된 파일 없음',
        userID: ''
    });
    
    function fileSelect(event){
        setInput({...input, videoPath: ' '+ event.target.files[0].name});
    }

    return(
        <>
            <Header/>
            <VideoUploadWrapper>
                <UploadLogo> Upload the Video </UploadLogo>
                <UploadVideo>
                        <Label>Choose video
                            <UploadInput type="file" onChange={fileSelect}/>
                        </Label>
                        <FileInfo> {input.videoPath} </FileInfo>
                </UploadVideo>
                    <input type="text" placeholder="title" ></input>
                    <input type="text" placeholder="description" ></input>
            </VideoUploadWrapper>
        </>
    );

}

export default VideoUpload;