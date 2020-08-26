import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import * as S from "./style";
import { useState, useRef } from 'react';
import Header from "../../../components/base/Header";
import {playlistService} from "../../../services/playlist.service";
import {history} from "../../../helpers";

function UpdatePlaylist(){
    const { listID } = useParams();
    const [text, setText]=useState(' ');
    const [imageURL, setImageURL] = useState(null);
    const inputCheck = useRef(null);
    let imageFile, uploadURL;

    const s_username = useSelector(state => state.authentication.username);

    const [input, setInput] = useState({
        listName:'',
        listDesc:'',
        thumbnail:null,
        isPublic:null
    });
    

    useEffect(() => {
        playlistService.getPlaylistInfoByListID(listID, s_username)
            .then(response => {
                setInput(response);
                return playlistService.getPlaylistImgByFileName(response.thumbnail)
            })
            .then(response => {
                setImageURL(response);
            })
    },[])
    
    function handleChange(e) {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

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
            setInput({...input,thumbnail: name});
            uploadURL = response[1];
            playlistService.UploadPlaylistFile(uploadURL,imageFile)
            .then(() => {
                playlistService.getPlaylistImgByFileName(name)
                .then(response =>{
                    setImageURL(response);
                })
            })
        })
    }

    useEffect(() => {},[imageURL])

    function UploadPlaylist(){
        const isPublic = inputCheck.current.checked ? 1 : 0;
        setInput({...input, isPublic: isPublic});

        if(!input.listName){
            return alert("제목을 입력해주세요.");
        }
        if(!input.listDesc){
            return alert("재생목록에 대한 설명을 입력해주세요.");
        }
        if(input.listName && input.listDesc){
            playlistService.updatePlaylistByListID(
                input, listID
            ).then(() => {
                history.push(`/playlist/${listID}`);
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
                        <S.InputTitle type="text" 
                                      placeholder="Title" 
                                      value={input.listName} 
                                      onChange={handleChange}
                                      name="listName" />
                        <S.InputDesc cols="10" 
                                     rows="5" 
                                     placeholder="Description" 
                                     value={input.listDesc} 
                                     onChange={handleChange}
                                     name="listDesc"/>
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

export default UpdatePlaylist;
