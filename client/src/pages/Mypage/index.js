import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import './style.scss';
import Header from "../../components/base/Header";
import VideoList from "../../components/video/VideoList";
import PlaylistList from "../../components/playlist/PlaylistList";
import {videoService, playlistService} from "../../services";



function Mypage(){
    const username = useSelector(state => state.authentication.username);

    const [videoInfo, setVideoInfo] = useState(null);
    const [playlistInfo, setPlaylistInfo] = useState(null);
    const [videoLiked, setVideoLiked] = useState(null);
    const [playlistLiked, setPlaylistLiked] = useState(null);


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
    const tabLink = document.querySelectorAll(".tab-menu-link");
    const tabContent = document.querySelectorAll(".tab-bar-content");

    tabLink.forEach((el) => {
        el.addEventListener("click", activeTab);
    });

    function activeTab(el) {
        const btnTarget = el.currentTarget;
        const content = btnTarget.dataset.content;

        tabContent.forEach((el) => {
            el.classList.remove("active");
        });

        tabLink.forEach((el) => {
            el.classList.remove("active");
        });

        document.querySelector("#" + content).classList.add("active");
        btnTarget.classList.add("active");
    }

    

    return(
        <>
        <Header/>
        <main class="main">
        <div class="container">
            <div class="tab">
                <div class="tab-menu">
                <button class="tab-menu-link active" data-content="first">
                    <span data-title="first">MY VIDEOS</span>
                </button>
                <button class="tab-menu-link" data-content="second" onClick={clickMyPlaylist}>
                    <span data-title="second">MY PLAYLISTS</span>
                </button>
                <button class="tab-menu-link" data-content="third" onClick={clickVideoLiked}>
                    <span data-title="third">LIKED VIDEOS</span>
                </button>
                <button class="tab-menu-link" data-content="fourth" onClick={clickPlaylistLiked}>
                    <span data-title="fourth">LIKED PLAYLISTS</span>
                </button>
                </div>
                <div class="tab-bar">
                    <div class="tab-bar-content active" id="first">
                        <div class="texts">
                            {videoInfo &&
                                <VideoList videoList={videoInfo} />
                            }
            
                        </div>
                    </div>
                    <div class="tab-bar-content" id="second">
                        <div class="texts">
                            {playlistInfo &&
                                <PlaylistList playlistList={playlistInfo} />
                            }
                        </div>
                    </div>
                    <div class="tab-bar-content" id="third">
                        <div class="texts">
                            {videoLiked &&
                                <VideoList videoList={videoLiked} />
                            }
                        </div>
                    </div>
                    <div class="tab-bar-content" id="fourth">
                        <div class="texts">
                            {playlistLiked &&
                                <PlaylistList playlistList={playlistLiked} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
        </>
    )
}

export default Mypage;