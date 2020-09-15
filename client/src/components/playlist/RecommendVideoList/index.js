import React, {useEffect, useState, Fragment} from 'react';
import {playlistService} from "../../../services";
import VideoList from "../VideoList";
import FallbackVideoList from "../FallbackVideoList";
import styled from "styled-components";
import {MAIN} from "../../style/Main";

function RecommendVideoList({listID, username}) {
    const [videoList, setVideoList] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        playlistService.getGTEQ0LT5VideoList({listID, username, orderBy:'like',limit:10, offset:0})
            .then(response => { 
                setVideoList(response);
                setLoading(false);
            })
    },[])

    return (
        <Fragment>
            <div style={{
                fontSize: '1.2em',
                marginTop: '1em',
                lineHeight: '1.2em',
                color: `${MAIN.DARK_TEXT_COLOR}`
            }}> 다른 사용자들은 이런 영상이 추가되길 원해요🤗 </div>
            {loading
              ? <FallbackVideoList marginLeft={-3}/>
              : <Fragment>
                    {videoList && videoList.length > 0 && <VideoList videoList={videoList}/>}
                </Fragment>
            }
        </Fragment>
    );
}

export default RecommendVideoList;
