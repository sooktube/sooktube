import React from 'react';
import {MainBackground, UploadForm, UploadLogo, UploadInput,Label, fileInput,InputTitle,UploadVideo} from "./style";
import { useState } from 'react';



function VideoUpload(){
    const [text,setText]=useState(' 선택된 파일 없음');
    
    function fileSelect(event){
        console.log(`Selected file - ${event.target.files[0].name}`);
        setText(' '+event.target.files[0].name);
    }

    const style={
        border:0
    }


        



    return(
        <MainBackground>
            <UploadLogo> Upload the Video </UploadLogo>
            <UploadVideo>
                    <Label>Choose video
                    <UploadInput id="inputId" type="file" onChange={fileSelect}/>
                    </Label>
                    <input type="text" style={style} readonly="readonly" id="file_route" value={text}></input>
            </UploadVideo>  
            
                
                <input type="text" placeholder="title" ></input>
                <input type="text" placeholder="description" ></input>
            
        </MainBackground>
    );

}

export default VideoUpload;