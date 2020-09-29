import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {videoActions} from "../../../actions";
import {history} from "../../../helpers";
import {videoService} from "../../../services";
import {useParams} from 'react-router-dom';

import * as S from "./style";
import Header from "../../../components/base/Header";
import VideoPlayer from "../../../components/common/VideoPlayer";
import Loader from "../../../components/common/Loader";


function UpdateVideo(){
    const dispatch = useDispatch();
    const {videoID} = useParams();

    const [input,setInput] = useState({
        uploadFileName: null,
        username: null,
        videoDesc: '',
        videoID: null,
        videoPath: null,
        videoTitle: ''
    });

    const videoURL = useSelector(state => state.video.videoURL);
    const isUploaded = useSelector(state => state.video.isUploaded);

    function fileSelect(event){
        setInput({...input, videoFileName : event.target.files[0].name, videoFile: event.target.files[0]});
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    useEffect(() => {
        videoService.getVideoInfoByVideoID(videoID)
            .then(response => {
                console.log(response);
                setInput(response);
            })
    }, [videoID]);

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
        if (input.videoTitle && input.videoDesc) {
            videoService.updateVideoByVideoID({
                videoTitle: input.videoTitle,
                videoDesc:input.videoDesc
            }, videoID
            ).then(response => {
                history.push(`/@${input.username}/video/${videoID}`)
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
                                  value={input.videoTitle}
                                  type="text"
                                  name="videoTitle"
                                  placeholder="Title" />

                    <S.InputDesc onChange={handleChange}
                                 value={input.videoDesc}
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
                    {videoURL
                        ? <VideoPlayer url={videoURL}/>
                        : <VideoPlayer url={input.videoPath}/>
                    }
                </S.VideoWrapper>
            </S.CreateVideoWrapper>
        </>
    );

}

export default UpdateVideo;