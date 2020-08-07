import React, {useState} from 'react';
import {playlistService} from "../../../../services";
import styled from "styled-components";
import {IoIosHeart} from "react-icons/all";
import {useParams} from 'react-router-dom';

function RecommendButton({videoID, username, recommended, recCount}) {
    const {listID} = useParams();
    const [rec, setRec] = useState({
        recommended: recommended,
        recCount: recCount
    });

    function toggleRecommend() {
        if(rec.recommended === 0){
            playlistService.recommendVideoInPlaylist({listID, videoID, username})
                .then(response => {
                    console.log(response);
                    setRec({
                        isRecommend: 1,
                        recCount: response[0]
                    })
                })
        }
        else {
            playlistService.cancelRecommendVideoInPlaylist({listID, videoID, username})
                .then(response => {
                    console.log(response);
                    setRec({
                        isRecommend: 0,
                        recCount: response[0]
                    })
                })
        }
    }

    const Recommend = styled(IoIosHeart)`
        width: 3rem;
        height: 2.2rem;
        margin-right: 1em;
        cursor: pointer;
        color: ${props => props.on === 1 ? '#71A6C6' : '#cecece'}
    `;

    return (
        <div>
            <Recommend on={rec.isRecommend} onClick={toggleRecommend}/>
            {rec.recCount}
        </div>
    );
}

export default RecommendButton;