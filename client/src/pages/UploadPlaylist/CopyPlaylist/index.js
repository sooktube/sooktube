import React, {useEffect, useState, useRef} from 'react';
import { useSelector } from 'react-redux';
import * as S from "./style";
import {useParams} from "react-router-dom";
import Header from "../../../components/base/Header";
import {playlistService} from "../../../services/playlist.service";
import {history} from "../../../helpers";

function CopyPlaylist(){
    const current_username = useSelector(state => state.authentication.username);
    const { listID } = useParams();
    const [text,setText]=useState(' ');
    const [uploadFilename,setUploadFilename]= useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [isUploaded, setIsUploaded] = useState(false);

    let imageFile, uploadURL;
    const inputTitle = useRef(null);
    const inputDesc = useRef(null);
    
    
    function fileSelect(event){
        setText(' '+event.target.files[0].name);
        imageFile = event.target.files[0];

        const time = new Date().getTime().toString();

        playlistService.getPlaylistUploadURL({
            uploadFileName:time,
            username:current_username
        })
        .then(response => {
            const name = response[0];
            setUploadFilename(name);
            uploadURL = response[1];
            playlistService.UploadPlaylistFile(uploadURL,imageFile)
            .then(() => {
                playlistService.getPlaylistImgByFileName(name)
                .then(response =>{
                    setIsUploaded(true);
                    setImageURL(response);
                })
            })
        })
    }

    useEffect(() => {},[imageURL])

    function UploadPlaylist(){
        const listName = inputTitle.current.value;
        const listDesc = inputDesc.current.value;
        const uploadFileName = uploadFilename;

        if(!listName){
            return alert("제목을 입력해주세요.");
        }
        if(!listDesc){
            return alert("재생목록에 대한 설명을 입력해주세요.");
        }
        if(!isUploaded){
            return alert("재생목록 대표 이미지가 아직 업로드 되지 않았습니다.")
        }
        if(listName&&listDesc){
            playlistService.uploadCopyPlaylistInfo({
                "listName": listName,
                "listDesc": listDesc,
                "thumbnail": uploadFileName,
                "username": current_username
            }).then(response => {
                const copyTo = response.listID;
                playlistService.copyPlaylistVideo(listID, copyTo)
                .then(()=>{
                    history.push(`/playlist/${copyTo}`);
                })
            })
        }
    }
    
    return(
        <>
            <Header/>
            <S.MainBackground>
                <S.UploadForm>
                    <S.UploadLogo> COPY THE PLAYLIST </S.UploadLogo>
                    <S.UploadVideo>
                            <S.Label>Thumbnail Image Upload
                            <S.UploadInput id="inputId" type="file"  onChange={fileSelect} />
                            </S.Label>
                            <S.NameInput>{text}</S.NameInput>
                    </S.UploadVideo>
                        <S.InputTitle type="text" placeholder="Title" ref={inputTitle}/>
                        <S.InputDesc cols="10" rows="5" placeholder="Description" ref={inputDesc}/>
                    <S.UploadBox>
                        <S.UploadButton onClick={UploadPlaylist}>CREATE</S.UploadButton>
                    </S.UploadBox>
                </S.UploadForm>
                <S.PreviewImage src={imageURL}/>
            </S.MainBackground>
        </>
    );

}

export default CopyPlaylist;
