import React from 'react';
import {videoService} from "../../../services";
import {history} from "../../../helpers";
import styled from 'styled-components';
import {useSelector} from "react-redux";

function DeleteVideo({videoID}) {
    const username = useSelector(state => state.authentication.username);

    const StyledButton = styled.div`
        margin-right: 1em;
        margin-top: 0.5em;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
    `;

    function deleteVideo() {
        videoService.deleteVideoByVideoID(videoID)
            .then(response => {
                if(response === 'deleted') {
                    console.log(response);
                    history.push(`/@${username}/profile/video`)
                }
            })
    }

    return (
        <StyledButton onClick={() => {
            if (window.confirm('영상을 삭제하시겠습니까?')) deleteVideo()}}> 삭제 </StyledButton>
    );
}

export default DeleteVideo;