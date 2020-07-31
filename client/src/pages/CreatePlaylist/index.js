import React from 'react';
import * as S from "./style";
import { useState, createContext, useContext } from 'react';
import { MAIN } from '../../components/style/Main';
import Header from "../../components/base/Header";
import Modal from "../../components/common/Modal/Modal";
import YoutubeSearch from "./YoutubeSearch";
import VideoSearch from "./VideoSearch";
import Video from "./Video/Video"

const videoList = createContext([{url:"https://storage.googleapis.com/sttbucket2020/sunset.jpg",title:"title"},
{url:"https://storage.googleapis.com/sttbucket2020/sunset.jpg",title:"title"},
{url:"https://storage.googleapis.com/sttbucket2020/sunset.jpg",title:"title"},
{url:"https://storage.googleapis.com/sttbucket2020/sunset.jpg",title:"title"},
{url:"https://storage.googleapis.com/sttbucket2020/sunset.jpg",title:"title"},
{url:"https://storage.googleapis.com/sttbucket2020/sunset.jpg",title:"title"}
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



    const videoList1 = useContext(videoList);


    

    return(
        <>    
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
                <S.VideoAdd onClick ={openYoutubeModal}> + Add Youtube Videos</S.VideoAdd>
                {youtubeModalVisible &&
                    <Modal visible={youtubeModalVisible}
                        onClose={closeYoutubeModal}>
                        <YoutubeSearch/>
                    </Modal>
                }
            </S.UploadBox>    
            <S.UploadBox2><S.VideoAdd onClick={openSearchModal}> + Add Videos in this Website</S.VideoAdd></S.UploadBox2>
            {searchModalVisible &&
                    <Modal visible={searchModalVisible}
                        onClose={closeSearchModal}>
                        <VideoSearch/>
                    </Modal>
                }
            </S.UploadForm>
            <S.VideoList>

            {false && <S.IsVideo>아직 재생목록에 동영상이 없습니다</S.IsVideo>}

            {videoList1.map(
                (video,index) => (<Video
                    url={video.url}
                    title={video.title}/>)
            )}
            </S.VideoList>
            </S.MainBackground>
            
       
       </>
    );

}

export default CreatePlaylist;
export {videoList};