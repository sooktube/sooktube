import React from 'react';
import { useSelector } from 'react-redux';
import * as S from "./style";
import { useState, useRef } from 'react';
import Header from "../../components/base/Header";
import {playlistService} from "../../services/playlist.service";

function CreatePlaylist(){
    const [text,setText]=useState(' ');
    const [uploadFilename,setUploadFilename]=useState(null);
    let imageFile,uploadURL,imageURL;

    const s_username = useSelector(state => state.authentication.username);

    const inputTitle = useRef(null);
    const inputDesc = useRef(null);
    const inputCheck = useRef(null);
    
    function fileSelect(event){
        console.log(`Selected file - ${event.target.files[0].name}`);
        setText(' '+event.target.files[0].name);
        imageFile = event.target.files[0];

        const time = new Date().getTime().toString();

        playlistService.getPlaylistUploadURL({
            uploadFileName:time+event.target.files[0].name,
            username:s_username
        })
        .then(response => {
            const name = response[0];
            setUploadFilename(name);
            uploadURL = response[1];

            playlistService.UploadPlaylistFile(uploadURL,imageFile)
            .then(response => {
                playlistService.getPlaylistFile(name)
                .then(response =>{
                console.log(name);
                console.log(response.data);
                imageURL = response.data;
                console.log(imageURL);
            })
        })
        })
    }

    function UploadPlaylist(){
        const listName = inputTitle.current.value;
        console.log(listName);
        const listDesc = inputDesc.current.value;
        const uploadFile = uploadFilename;
        const isPublic = inputCheck.current.checked ? 1 : 0;
        console.log(isPublic);
        if(!listName){
            return alert("제목을 입력해주세요.");
        }
        if(!listDesc){
            return alert("재생목록에 대한 설명을 입력해주세요.");
        }
        if(listName&&listDesc){
            playlistService.UploadPlaylistInfo({
                listName,listDesc,uploadFile,isPublic
            }).then(response => {
                console.log(response);
            })
        }
        
        

    }

    const style={
        position:'absolute',top:'2vh',
        width:'20px',height:'20px'
    }

    
    return(
        <VideoProvider>   
            <Header/>
            <S.MainBackground>
            
            <S.UploadForm>
            <S.UploadLogo> CREATE THE PLAYLIST </S.UploadLogo>
            <S.UploadVideo>
                    <S.Label>Input the Preview Image
                    <S.UploadInput id="inputId" type="file"  onChange={fileSelect} />
                    </S.Label>
                    <S.NameInput>{text}</S.NameInput>
            </S.UploadVideo>  
                <S.InputTitle type="text" placeholder="Title" ref={inputTitle}/>
                <S.InputDesc cols="10" rows="5" placeholder="Description" ref={inputDesc}/>
            <S.UploadBox>
                <input style={style} type="checkbox"  ref={inputCheck}/>
                <S.TextCheck>Public</S.TextCheck>
                
                
                <S.UploadButton onClick={UploadPlaylist}>CREATE</S.UploadButton>
                
                
                
            </S.UploadBox>    
            <S.TextCheck2>Anyone can search for and edit</S.TextCheck2>
            <S.UploadBox2><S.PreviewImage src={imageURL}/></S.UploadBox2>
            </S.UploadForm>
            
            </S.MainBackground>
            
       
        </VideoProvider> 
    );

}

export default CreatePlaylist;
