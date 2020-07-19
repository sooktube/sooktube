import React from 'react';
import {VideoUploadWrapper, FileInfo, UploadForm, ButtonUpload, UploadLogo, UploadInput, TitleInput, DescInput, Label, UploadVideo} from "./style";
import { useState } from 'react';
import Header from "../../components/Header";
import axios from "axios";

function VideoUpload(){
    const [input,setInput] = useState({
        videoTitle: null,
        videoDesc: null,
        videoDate: null,
        videoPath: ' 선택된 파일 없음',
        userID: ''
    });

    const [state, setState] = useState({
        file: null,
        success: false,
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
                    <TitleInput type="text" placeholder='제목'/>
                    <DescInput type="text" placeholder='어떤 동영상인가요?'/>
                <ButtonUpload> 업로드 </ButtonUpload>
            </VideoUploadWrapper>
        </>
    );

}

export default VideoUpload;