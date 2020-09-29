import React, {useState} from 'react';
import {playlistService} from "../../../../services";
import {useParams} from 'react-router-dom';
import * as S from './style';

function DisrecommendButton({inVideoList, videoID, username, disrecommended, disrecCount, setCount, setDisrecommend, loading, setLoading}) {
    const {listID} = useParams();

    const [isInVideoList, setInVideoList] = useState(inVideoList);

    async function toggleRecommend() {
        //이미 재생목록에 있던 영상을 비추천
        if(!loading && disrecommended === 0 && isInVideoList === 1) {
            await setDisrecommend(-1);
            playlistService.disrecommendVideoInPlaylist({listID, videoID, username})
                .then(response => {
                    setCount({
                        recommended: response[0],
                        disrecommended: response[1]
                    })
                    setLoading(false);
                })
        }
        //영상을 비추천하면서 재생목록에 새로 추가
        else if (!loading && disrecommended === 0 && isInVideoList === 0) {
            await setDisrecommend(-1);
            playlistService.addVideoToPlaylist({listID, videoID, username})
                .then(() => {
                    return playlistService.disrecommendVideoInPlaylist({listID, videoID, username})
                })
                .then(response => {
                    setCount({
                        recommended: response[0],
                        disrecommended: response[1]
                    })
                    setInVideoList(1);
                    setLoading(false);
                })
        }
        //이미 재생목록에 있던 영상을 비추천 취소
        else if (!loading && disrecommended === -1 && isInVideoList === 1) {
            await setDisrecommend(0);
            playlistService.cancelDisrecommendVideoInPlaylist({listID, videoID, username})
                .then(response => {
                    setCount({
                        recommended: response[0],
                        disrecommended: response[1]
                    })
                    setLoading(false);
                })
        }
    }

    return (
        <S.DisrecommendWrapper>
            <S.Disrecommend on={disrecommended} onClick={toggleRecommend}/>
            <span> {disrecCount} </span>
        </S.DisrecommendWrapper>
    );
}

export default DisrecommendButton;