import React from 'react';
import {VideoUploadWrapper, FileInfo, UploadForm, ButtonUpload, UploadLogo, UploadInput, TitleInput, DescInput, Label, UploadVideo} from "./style";
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
                    <TitleInput type="text" placeholder="title" placeholder='제목'></TitleInput>
                    <DescInput type="text" placeholder="description" placeholder='어떤 동영상인가요?'></DescInput>
                <ButtonUpload> 업로드 </ButtonUpload>
            </VideoUploadWrapper>
        </>
    );

}

export default VideoUpload;