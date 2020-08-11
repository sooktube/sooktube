import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import './style.scss';
import Header from "../../components/base/Header";
import VideoList from "../../components/video/VideoList";
import NotFound from "../../components/video/VideoList";
import VideoLikedList from "../../components/video/VideoList/VideoLiked";
import PlaylistList from "../../components/playlist/PlaylistList";
import PlaylistLikedList from "../../components/playlist/PlaylistList/PlaylistLiked";
import {videoService, playlistService} from "../../services";
import notFound from '../../components/video/VideoList/notFound';


function Mypage(){

    const username = useSelector(state => state.authentication.username);

    const [videoInfo, setVideoInfo] = useState(null);
    const [playlistInfo, setPlaylistInfo] = useState(null);
    const [videoLiked, setVideoLiked] = useState(null);
    const [playlistLiked, setPlaylistLiked] = useState(null);

    const [videolistLength, setVideolistLength] = useState(0);
    const [playlistLength, setPlaylistLength] = useState(0);
    const [videolikedlength,setVideoLikedLength] = useState(0);
    const [playlistlikedlength, setPlaylistLikedLength] = useState(0);
  
  



    useEffect(() => {
        videoService.getVideoListByUsername(username)
            .then(response => {
                setVideoInfo(response);
                console.log(response);
                setVideolistLength(response.length);
            });

        
    },[])

    function clickMyPlaylist(){
        playlistService.getPlaylistListByUsername(username)
            .then(response => {
                setPlaylistInfo(response);
                console.log(response);
                setPlaylistLength(response.length);
            });
    }


    function clickVideoLiked(){
        videoService.getVideoLikedByUsername(username)
            .then(response => {
                setVideoLiked(response);
                console.log(response);
                setVideoLikedLength(response.length);
            });
    }

    function clickPlaylistLiked(){
        playlistService.getPlaylistListLikedByUsername(username)
            .then(response => {
                setPlaylistLiked(response);
                console.log(response);
                setPlaylistLikedLength(response.length);
            });
    }

    

    return(
        <>
        <Header/>
        
       
        <div className="container">
        <input type="radio" name="tabs" id="tab_3" onClick={clickPlaylistLiked}/>
        <label for="tab_3">
            <div className="content">
                {playlistLiked &&
                    <PlaylistLikedList playlistList={playlistLiked} length={playlistlikedlength}/>
                }

            </div>
        </label>
        <input type="radio" name="tabs" id="tab_2" onClick={clickVideoLiked}/>
        <label for="tab_2">
            <div className="content">
                {videoLiked &&
                    <VideoLikedList videoList={videoLiked} length={videolikedlength}/>
                }
            
            </div>
        </label>
        <input type="radio" name="tabs" id="tab_1" onClick={clickMyPlaylist}/>
        <label for="tab_1">
            <div className="content">
                {playlistInfo &&
                    <PlaylistList playlistList={playlistInfo} length={playlistLength}/>
                }

            </div>
        </label>
        <input type="radio" name="tabs" id="tab_0"/>
        <label for="tab_0">
            <div className="content">
                {videoInfo &&
                    <VideoList videoList={videoInfo} length={videolistLength}/>
                }
            </div>
        </label>
        </div>
        
        
        </>
    )
}

export default Mypage;