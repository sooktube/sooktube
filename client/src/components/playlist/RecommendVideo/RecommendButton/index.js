import React, {useEffect, useState} from 'react';
import {playlistService} from "../../../../services";
import styled from "styled-components";
import {IoIosHeart} from "react-icons/all";
import {useParams} from 'react-router-dom';

function RecommendButton({inVideoList, videoID, username, recommended, recCount}) {
    const {listID} = useParams();
    const [rec, setRec] = useState({
        inVideoList: inVideoList,
        recommended: recommended,
        recCount: recCount,
        loading: false
    });

    useEffect(() => {
        console.log(rec.inVideoList, rec.recommended, rec.recCount);
    }, [rec.recommended]);

    async function toggleRecommend() {
        //이미 재생목록에 있던 영상을 추천
       if(!rec.loading && rec.recommended === 0 && rec.inVideoList === 1) {
            await setRec({
                ...rec,
                recommended: 1,
                loading: true
            })
            playlistService.recommendVideoInPlaylist({listID, videoID, username})
                .then(response => {
                    console.log(response);
                    setRec({
                        ...rec,
                        recommended: 1,
                        recCount: response[0],
                        loading: false
                    })
                }
            )


        }
        //영상을 추천하면서 재생목록에 새로 추가
        else if (!rec.loading && rec.recommended === 0 && rec.inVideoList === 0) {
            console.log("새로 추가");
            await setRec({
                ...rec,
                recommended: 1,
                loading: true
            },
            playlistService.addVideoToPlaylist({listID, videoID, username})
                .then(response => {
                    return playlistService.recommendVideoInPlaylist({listID, videoID, username})
                })
                .then(response => {
                    console.log(response);
                    setRec({
                        recommended: 1,
                        inVideoList: 1,
                        recCount: response[0],
                        loading: false
                    })
                })
            )

        }
        //이미 재생목록에 있던 영상을 추천 취소
        else if (!rec.loading && rec.recommended === 1 && rec.inVideoList === 1) {
            console.log("추천 취소");
            await setRec({
                ...rec,
                recommended: 0,
                loading: true
            },
            playlistService.cancelRecommendVideoInPlaylist({listID, videoID, username})
                .then(response => {
                    console.log(response);
                    setRec({
                        ...rec,
                        recommended: 0,
                        recCount: response[0],
                        loading: false
                    })
                }))

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
            <Recommend on={rec.recommended} onClick={toggleRecommend}/>
            {rec.recCount}
        </div>
    );
}

export default RecommendButton;