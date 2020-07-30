import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {videoActions} from "../../actions";

import * as S from "./style";
import Header from "../../components/base/Header";
import VideoPlayer from "../../components/common/VideoPlayer";
import Loader from "../../components/common/Loader";
import {videoService} from "../../services";

function CreateVideo(){
    const dispatch = useDispatch();

    const [input,setInput] = useState({
        videoTitle: null,
        videoDesc: null,
        videoDate: null,
        videoFile: null,
        videoFileName: null,
        uploadFileName: null,
        username: ''
    });

    const username = useSelector(state => state.authentication.username);
    const videoURL = useSelector(state => state.video.videoURL);
    const uploadFileName = useSelector(state => state.video.uploadFileName);
    const isUploaded = useSelector(state => state.video.isUploaded);

    function fileSelect(event){
        setInput({...input, videoFileName : event.target.files[0].name, videoFile: event.target.files[0]});
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
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
                videoFile: input.videoFile,
            }))
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
        if (input.videoTitle && input.videoDesc && input.videoFile && isUploaded) {
            videoService.UploadVideoInfo({
                videoTitle: input.videoTitle,
                videoDesc: input.videoDesc,
                username: input.username,
                uploadFileName: uploadFileName
            }).then(response => {
                console.log(response);
            })
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
                            ? <S.VideoName> {input.videoFileName}</S.VideoName>
                            : <S.VideoName> 선택된 파일 없음 </S.VideoName>
                        }
                    </S.UploadVideo>
                    <S.InputTitle onChange={handleChange}
                                  type="text"
                                  name="videoTitle"
                                  placeholder="Title" />

                    <S.InputDesc onChange={handleChange}
                                 name="videoDesc"
                                 cols="10"
                                 rows="5"
                                 placeholder="Description" />
                    <S.UploadButton onClick={handleClick}> UPLOAD </S.UploadButton>
                </S.InputVideoWrapper>
                <S.VideoWrapper>
                    <S.UploadCheckWrapper>
                        {isUploaded && input.videoFile &&
                            <> <S.Check/>
                            <S.VideoUploadLoading> 업로드 완료 </S.VideoUploadLoading> </>
                        }
                        {!isUploaded && input.videoFile &&
                            <> <Loader/>
                            <S.VideoUploadLoading> 업로드 하는 중... </S.VideoUploadLoading> </>
                        }
                    </S.UploadCheckWrapper>
                        <VideoPlayer url={videoURL}/>
                </S.VideoWrapper>
            </S.CreateVideoWrapper>
            </>
    );

}

export default CreateVideo;