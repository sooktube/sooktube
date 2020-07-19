import React from 'react';
import {MainBackground, UploadForm, UploadLogo, UploadInput,Label,InputTitle,UploadVideo,InputDesc,UploadButton,NameInput} from "./style";
import { useState } from 'react';
import { MAIN } from '../Style/Main';
import Header from "../Header";


function VideoUpload(){
    const [text,setText]=useState(' 선택된 파일 없음');
    
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
            <UploadLogo> UPLOAD THE VIDEO </UploadLogo>
            <UploadVideo>
                    <Label>Choose video
                    <UploadInput id="inputId" type="file" onChange={fileSelect}/>
                    </Label>
                    <NameInput type="text" style={style} readonly="readonly" id="file_route" value={text}></NameInput>
            </UploadVideo>  
            
                
                <InputTitle type="text" placeholder="title" ></InputTitle>
                <InputDesc cols="10" rows="5" placeholder="description" ></InputDesc>
                <UploadButton>UPLOAD</UploadButton>
            
        </MainBackground>
       
        
    );

}

export default VideoUpload;