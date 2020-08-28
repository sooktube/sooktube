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
        videoService.getVideoListByUsername({username})
            .then(response => {
                setVideoInfo(response);
            }); 
    },[])

    function clickMyPlaylist(){
        playlistService.getPlaylistListByUsername({username})
            .then(response => {
                setPlaylistInfo(response);
            });
    }

    function clickVideoLiked(){
        videoService.getVideoLikedByUsername(username)
            .then(response => {
                setVideoLiked(response);
            });
    }

    function clickPlaylistLiked(){
        playlistService.getPlaylistListLikedByUsername(username)
            .then(response => {
                setPlaylistLiked(response);
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
        <main className="main">
        <div className="container">
            <div className="tab">
                <div className="tab-menu">
                <button className="tab-menu-link active" data-content="first">
                    <span data-title="first">MY VIDEOS</span>
                </button>
                <button className="tab-menu-link" data-content="second" onClick={clickMyPlaylist}>
                    <span data-title="second">MY PLAYLISTS</span>
                </button>
                <button className="tab-menu-link" data-content="third" onClick={clickVideoLiked}>
                    <span data-title="third">LIKED VIDEOS</span>
                </button>
                <button className="tab-menu-link" data-content="fourth" onClick={clickPlaylistLiked}>
                    <span data-title="fourth">LIKED PLAYLISTS</span>
                </button>
                </div>
                <div className="tab-bar">
                    <div className="tab-bar-content active" id="first">
                        <div className="texts">
                            {videoInfo &&
                                <VideoList videoList={videoInfo} />
                            }

                        </div>
                    </div>
                    <div className="tab-bar-content" id="second">
                        <div className="texts">
                            {playlistInfo &&
                                <PlaylistList playlistList={playlistInfo} />
                            }
                        </div>
                    </div>
                    <div className="tab-bar-content" id="third">
                        <div className="texts">
                            {videoLiked &&
                                <VideoList videoList={videoLiked} />
                            }
                        </div>
                    </div>
                    <div className="tab-bar-content" id="fourth">
                        <div className="texts">
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