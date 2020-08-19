import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import * as S from "./style";
import { useState, useRef } from 'react';
import Header from "../../../components/base/Header";
import {playlistService} from "../../../services/playlist.service";
import {history} from "../../../helpers";

function CreatePlaylist(){
    const [text,setText]=useState(' ');
    const [uploadFilename,setUploadFilename]= useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [isUploaded, setIsUploaded] = useState(false);

    let imageFile, uploadURL;

    const s_username = useSelector(state => state.authentication.username);

    const inputTitle = useRef(null);
    const inputDesc = useRef(null);
    const inputCheck = useRef(null);
    
    function fileSelect(event){
        setText(' '+event.target.files[0].name);
        imageFile = event.target.files[0];

        const time = new Date().getTime().toString();

        playlistService.getPlaylistUploadURL({
            uploadFileName:time,
            username:s_username
        })
        .then(response => {
            const name = response[0];
            setUploadFilename(name);
            uploadURL = response[1];
            playlistService.UploadPlaylistFile(uploadURL,imageFile)
            .then(response => {
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
        const isPublic = inputCheck.current.checked ? 1 : 0;

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
            playlistService.UploadPlaylistInfo({
                "username": s_username,
                "listName": listName,
                "listDesc": listDesc,
                "thumbnail": uploadFileName,
                "isPublic": isPublic
            }).then(response => {
                history.push(`/playlist/${response.listID}`);
            })
        }
    }

    const style={
        position:'absolute',top:'2vh',
        width:'20px',height:'20px'
    }

    
    return(
        <>
            <Header/>
            <S.MainBackground>
                <S.UploadForm>
                    <S.UploadLogo> CREATE THE PLAYLIST </S.UploadLogo>
                    <S.UploadVideo>
                            <S.Label>Thumbnail Image Upload
                            <S.UploadInput id="inputId" type="file"  onChange={fileSelect} />
                            </S.Label>
                            <S.NameInput>{text}</S.NameInput>
                    </S.UploadVideo>
                        <S.InputTitle type="text" placeholder="Title" ref={inputTitle}/>
                        <S.InputDesc cols="10" rows="5" placeholder="Description" ref={inputDesc}/>
                    <S.UploadBox>
                        <input style={style} type="checkbox" ref={inputCheck}/>
                        <S.TextCheck>Public</S.TextCheck>
                        <S.UploadButton onClick={UploadPlaylist}>CREATE</S.UploadButton>
                    </S.UploadBox>
                    <S.TextCheck2>Anyone can search for and edit</S.TextCheck2>
                </S.UploadForm>
                <S.PreviewImage src={imageURL}/>
            </S.MainBackground>
        </>
    );

}

export default CreatePlaylist;
