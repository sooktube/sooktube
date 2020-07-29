import React from 'react';
import * as S from "./style";
import Header from "../../components/base/Header";
import VideoPlayer from "../../components/common/VideoPlayer";
import CommentBox from "./Comments";

function Player(){

    const comments=[
        {username:'hyerin',text:'I hope you think of me high',photo:'https://storage.googleapis.com/sttbucket2020/sunset.jpg'},
        {username:'hajung',text:'when you are with someone else',photo:'https://storage.googleapis.com/sttbucket2020/sunset.jpg'},
        {username:'jua',text:'today i called to tell you that im changing',photo:'https://storage.googleapis.com/sttbucket2020/sunset.jpg'}
    ];

    const title="The Cutest Seven Retriever Puppy Siblings!";
    const desc="this is a video of a puppy. how big are they now? where's your mother?";


    return(
        <S.MainBackground>
            <Header/>
            <S.VideoBox>
                <VideoPlayer width="47vw" url="https://storage.googleapis.com/sttbucket2020/dog1.mp4"/>
            </S.VideoBox>
            <S.VideoTitle>{title}</S.VideoTitle>
            <S.VideoDesc>{desc}</S.VideoDesc>
            <hr/>
            <CommentBox/>
        </S.MainBackground>
    );
}

export default Player;