import React, {useEffect, useState} from 'react';
import {videoService} from "../../../services";
import {useSelector} from "react-redux";
import Header from "../../../components/base/Header";
import VideoList from "../../../components/video/VideoList";

function UserVideoList() {
    const username = useSelector(state => state.authentication.username);

    const [videoInfo, setVideoInfo] = useState(null);

    useEffect(() => {
        videoService.getVideoListByUsername(username)
            .then(response => {
                setVideoInfo(response);
                console.log(response);
            })
    },[])

    return(
      <>
          <Header/>
          {videoInfo &&
             <VideoList videoList={videoInfo}/>
          }
      </>
    );
}

export default UserVideoList;