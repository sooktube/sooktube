import React from 'react';
import {MainBackground, UploadForm,IsVideo, UploadLogo, UploadInput,Label,InputTitle,UploadVideo,InputDesc,UploadButton,NameInput,VideoAdd} from "./style";
import { useState } from 'react';
import { MAIN } from '../Style/Main';
import Header from "../Header";


function VideoPlaylist(){
    const [text,setText]=useState(' ');
    
    function fileSelect(event){
        console.log(`Selected file - ${event.target.files[0].name}`);
        setText(' '+event.target.files[0].name);
    }

    const style={
        border:0  ,
    }
    

    return(
        
        <MainBackground>
            <Header></Header>
            <UploadLogo> MAKE THE PLAYLIST </UploadLogo>
            <UploadVideo>
                    <Label>재생목록 대표사진 고르기
                    <UploadInput id="inputId" type="file" onChange={fileSelect}/>
                    </Label>
                    <NameInput type="text" style={style} readonly="readonly" id="file_route" value={text}></NameInput>
            </UploadVideo>  
                <IsVideo>아직 재생목록에 동영상이 없습니다</IsVideo>
            
                
                <InputTitle type="text" placeholder="title" ></InputTitle>
                <InputDesc cols="10" rows="5" placeholder="description" ></InputDesc>
                <UploadButton>재생목록 만들기</UploadButton>
                <VideoAdd> + 동영상 추가</VideoAdd>
            
        </MainBackground>
       
        
    );

}

export default VideoPlaylist;