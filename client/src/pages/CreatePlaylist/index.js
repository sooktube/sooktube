import React from 'react';
import * as S from "./style";
import { useState } from 'react';
import { MAIN } from '../../components/Style/Main';
import Header from "../../components/Header";


function CreatePlaylist(){
    const [text,setText]=useState(' ');
    
    function fileSelect(event){
        console.log(`Selected file - ${event.target.files[0].name}`);
        setText(' '+event.target.files[0].name);
    }

    const style={
        border:0  ,
    }
    

    return(
        
        <S.MainBackground>
            <Header></Header>
            <S.UploadForm>
            <S.UploadLogo> CREATE THE PLAYLIST </S.UploadLogo>
            <S.UploadVideo>
                    <S.Label>Input the Preview Image
                    <S.UploadInput id="inputId" type="file" onChange={fileSelect}/>
                    </S.Label>
                    <S.NameInput type="text" style={style} readonly="readonly" id="file_route" value={text}></S.NameInput>
            </S.UploadVideo>  
               
                <S.IsVideo>아직 재생목록에 동영상이 없습니다</S.IsVideo>
            
                
                <S.InputTitle type="text" placeholder="title" ></S.InputTitle>
                <S.InputDesc cols="10" rows="5" placeholder="description" ></S.InputDesc>
            <S.UploadBox>
                <S.UploadButton>CREATE</S.UploadButton>
                <S.VideoAdd> + Add Videos</S.VideoAdd>
            </S.UploadBox>    
            </S.UploadForm>
            
        </S.MainBackground>
       
        
    );

}

export default CreatePlaylist;