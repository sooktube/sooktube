import React, { useEffect, useState, lazy, Suspense} from 'react';
import { useSelector, useDispatch }  from "react-redux";
import { userActions } from "../../../actions/user.action";
import { useParams } from "react-router-dom";
import VideoList from "../VideoList";

function UploadedVideo({ username}) {
    const [order, setOrder] = useState('like');

    const totalOrderByLike = useSelector(state => state.user.totalUploadedVideo);
    const VideoOrderByLike = useSelector(state => state.user.uploadedVideo);
    const showFallbackUOrderByLike =  useSelector(state => state.user.showFallbackUploadedVideo);

    useEffect(() =>{
        console.log(VideoOrderByLike);
    },[VideoOrderByLike])
    return (
        <>
            {order === 'like'
                ? <VideoList action={userActions.loadUploadedVideo}
                             total={totalOrderByLike}
                             items={VideoOrderByLike}
                             showFallbackItems={showFallbackUOrderByLike}
                             orderBy='like'
                             username={username}/>
                : <VideoList action={userActions.loadUploadedVideo}/>
            }
        </>
    );
}

export default UploadedVideo;