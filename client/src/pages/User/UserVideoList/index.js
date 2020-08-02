import React, {useEffect, useState} from 'react';
import {videoService} from "../../../services";
import {useSelector} from "react-redux";

function UserVideoList() {
    const username = useSelector(state => state.authentication.username);

    const [videoInfo, setVideoInfo] = useState(null)
    useEffect(() => {
        videoService.getVideoInfoByUsername(username)
            .then(response => {
                setVideoInfo(response);
                console.log(response);
            })
    },[])

    return(
      <>
      </>
    );
}

export default UserVideoList;