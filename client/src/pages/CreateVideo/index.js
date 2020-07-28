import React, {useRef, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {videoActions} from "../../actions";

import * as S from "./style";
import Header from "../../components/base/Header";

function CreateVideo(){
    const dispatch = useDispatch();

    const [input,setInput] = useState({
        videoTitle: null,
        videoDesc: null,
        videoDate: null,
        videoFile: null,
        uploadFileName: null,
        username: ''
    });

    const username = useSelector(state => state.authentication.username);

    function fileSelect(event){
        setInput({...input, videoFile: ' '+ event.target.files[0].name});
    }

    useEffect(() => {
        const time = new Date().getTime().toString();
        setInput({...input, uploadFileName: time, username: username});
    }, []);

    useEffect(() => {
        if(input.videoFile) {
            dispatch(videoActions.uploadVideoFile({
                uploadFileName: input.uploadFileName,
                username: input.username,
                videoFile: input.videoFile
            }));
        }
    }, [input.videoFile]);
    
    function handleClick(e) {
        e.preventDefault();
        if (!input.videoTitle) {
            return alert("제목을 입력해주세요.");
        }
        if (!input.videoDesc) {
            return alert("영상에 대한 설명을 입력해주세요.");
        }
        if (!input.videoFile) {
            return alert("영상을 업로드해주세요.");
        }
        if (input.videoTitle && input.videoDesc && input.videoFile) {

        }
    }
    return(
        <>
            <Header/>
            <S.CreateVideoWrapper>
                <S.InputVideoWrapper>
                    <S.UploadLogo> UPLOAD THE VIDEO </S.UploadLogo>
                    <S.UploadVideo>
                        <S.Label>Choose video
                            <S.UploadInput type="file" onChange={fileSelect}/>
                        </S.Label>
                        {input.videoFile
                            ? <S.VideoName> {input.videoFile}</S.VideoName>
                            : <S.VideoName> 선택된 파일 없음 </S.VideoName>
                        }
                    </S.UploadVideo>
                    <S.InputTitle type="text" placeholder="title" />
                    <S.InputDesc cols="10" rows="5" placeholder="description" />
                    <S.UploadButton>UPLOAD</S.UploadButton>
                    <S.ThumbnailWrapper>
                    </S.ThumbnailWrapper>
                </S.InputVideoWrapper>
            </S.CreateVideoWrapper>
            </>
    );

}

export default CreateVideo;