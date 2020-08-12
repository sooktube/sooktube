import React, {useState} from 'react';
import {playlistService} from "../../../../services";
import {useParams} from 'react-router-dom';
import * as S from './style';

function DisrecommendButton({inVideoList, videoID, username, disrecommended, disrecCount}) {
    const {listID} = useParams();

    const [rec, setRec] = useState({
        videoID,
        inVideoList,
        disrecommended,
        disrecCount,
        loading: false
    });

    async function toggleRecommend() {
        //이미 재생목록에 있던 영상을 추천
        if(!rec.loading && rec.disrecommended === 0 && rec.inVideoList === 1) {
            await setRec(rec => ({...rec, disrecommended: 1, loading: true}));
            playlistService.disrecommendVideoInPlaylist({listID, videoID, username})
                .then(response => {
                        setRec(rec => ({
                            ...rec,
                            disrecommended: 1,
                            disrecCount: response[1],
                            loading: false
                        }))
                    }
                )
        }
        //영상을 추천하면서 재생목록에 새로 추가
        else if (!rec.loading && rec.disrecommended === 0 && rec.inVideoList === 0) {
            await setRec(rec => ({...rec, disrecommended: 1, loading: true}));
            playlistService.addVideoToPlaylist({listID, videoID, username})
                .then(() => {
                    return playlistService.disrecommendVideoInPlaylist({listID, videoID, username})
                })
                .then(response => {
                    setRec({
                        disrecommended: 1,
                        inVideoList: 1,
                        disrecCount: response[1],
                        loading: false
                    })
                })
        }
        //이미 재생목록에 있던 영상을 추천 취소
        else if (!rec.loading && rec.disrecommended === 1 && rec.inVideoList === 1) {
            await setRec(rec => ({...rec, disrecommended: 0, loading: true}),
                playlistService.cancelDisrecommendVideoInPlaylist({listID, videoID, username})
                    .then(response => {
                        setRec(rec => ({
                            ...rec,
                            disrecommended: 0,
                            disrecCount: response[1],
                            loading: false
                        }))
                    }))

        }
    }

    return (
        <div>
            <S.Recommend on={rec.disrecommended} onClick={toggleRecommend}/>
            {rec.disrecCount}
        </div>
    );
}

export default DisrecommendButton;