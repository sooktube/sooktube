import React from 'react';
import * as S from "./style";
import { useState, createContext, useContext } from 'react';
import { MAIN } from '../../components/style/Main';
import Header from "../../components/base/Header";
import Modal from "../../components/common/Modal/Modal";
import YoutubeSearch from "./YoutubeSearch";
import VideoSearch from "./VideoSearch";
import {VideoProvider} from "./VideoListContext";
import ShowVideoList from "./ShowVideoList";
import Video from "./Video/VIdeo";

const videoList = createContext([{url:"https://storage.googleapis.com/sttbucket2020/dog1.mp4",title:"title"},
    {url:"https://storage.googleapis.com/sttbucket2020/dog1.mp4",title:"title"},
    {url:"https://storage.googleapis.com/sttbucket2020/dog1.mp4",title:"title"},
    {url:"https://storage.googleapis.com/sttbucket2020/dog1.mp4",title:"title"},
    {url:"https://storage.googleapis.com/sttbucket2020/dog1.mp4",title:"title"},
    {url:"https://storage.googleapis.com/sttbucket2020/dog1.mp4",title:"title"}
]);





function CreatePlaylist(){
    const [text,setText]=useState(' ');
    const [youtubeModalVisible, setYoutubeModalVisible] = useState(false);
    const [searchModalVisible, setSearchModalVisible] = useState(false);
    const [noVideo, setNoVideo] = useState(true);
    
    function fileSelect(event){
        console.log(`Selected file - ${event.target.files[0].name}`);
        setText(' '+event.target.files[0].name);
    }

    const style={
        border:0  
    }

    const openYoutubeModal = () => {
        setYoutubeModalVisible(true)
    };
    const closeYoutubeModal = () => {
        setYoutubeModalVisible(false)
    };
    const openSearchModal = () => {
        setSearchModalVisible(true)
    };
    const closeSearchModal = () => {
        setSearchModalVisible(false)
    };

    const af =false;



    /*const videoList6 = useContext(videoList);*/


    

    return(
        <VideoProvider>   
            <Header></Header>
            <S.MainBackground>
            
            <S.UploadForm>
            <S.UploadLogo> CREATE THE PLAYLIST </S.UploadLogo>
            <S.UploadVideo>
                    <S.Label>Input the Preview Image
                    <S.UploadInput id="inputId" type="file" onChange={fileSelect}/>
                    </S.Label>
                    <S.NameInput>{text}</S.NameInput>
            </S.UploadVideo>  
                <S.InputTitle type="text" placeholder="Title" ></S.InputTitle>
                <S.InputDesc cols="10" rows="5" placeholder="Description" ></S.InputDesc>
            <S.UploadBox>
                <S.UploadButton >CREATE</S.UploadButton>
                <S.VideoAdd onClick={openSearchModal}> + Add Videos</S.VideoAdd>
                {searchModalVisible &&
                    <Modal visible={searchModalVisible}
                        onClose={closeSearchModal}
                        width="600px">
                        <VideoSearch/>
                    </Modal>
                }
            </S.UploadBox>    
            <S.UploadBox2></S.UploadBox2>
            </S.UploadForm>
            {af && <Video></Video>}
            <ShowVideoList>
                
            </ShowVideoList>
            </S.MainBackground>
            
       
        </VideoProvider> 
    );

}

export default CreatePlaylist;
export {videoList};