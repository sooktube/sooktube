import React, {useRef, useState, useEffect} from 'react';
import axios from "axios";

import {
    InputVideoWrapper,
    UploadForm,
    UploadLogo,
    UploadInput,
    Label,
    InputTitle,
    UploadVideo,
    InputDesc,
    UploadButton,
    VideoName,
    ThumbnailWrapper,
    Thumbnail,
    CreateVideoWrapper
} from "./style";
import Header from "../../components/Header";
import {useSelector} from "react-redux";

function CreateVideo(){
    const [input,setInput] = useState({
        videoTitle: null,
        videoDesc: null,
        videoDate: null,
        videoPath: null,
        uploadFileName: null,
        username: ''
    });

    const username = useSelector(state => state.authentication.username);

    const [state, setState] = useState({
        file: null,
        success: false,
    });

    function fileSelect(event){
        setInput({...input, videoPath: ' '+ event.target.files[0].name});
    }

    useEffect(() => {
        const time = new Date().getTime().toString();
        setInput({...input, uploadFileName: time, username: username});
    }, []);

    useEffect(() => {
        if(input.videoPath){
            axios({
                method: 'POST',
                url: 'https://soktube.appspot.com/api/video/createURL',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({
                    "bucketName": "soktube.appspot.com",
                    "uploadFileName": input.uploadFileName,
                    "username": input.username
                })}).then((response) => {
                    const uploadURL = response.data;
                    
                return response.data;
                })
                .catch(error => {
                    return error;
                });
        }

    }, [input.videoPath]);

    return(
        <>
            <Header/>
            <CreateVideoWrapper>
                <InputVideoWrapper>
                    <UploadLogo> UPLOAD THE VIDEO </UploadLogo>
                    <UploadVideo>
                        <Label>Choose video
                            <UploadInput type="file" onChange={fileSelect}/>
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
                    </ThumbnailWrapper>
                </InputVideoWrapper>

            </CreateVideoWrapper>
            </>
    );

}

export default CreateVideo;