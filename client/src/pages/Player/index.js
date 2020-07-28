import React from 'react';
import { MainBackground, VideoBox , CommentBox, CommentTitle,CommentContainer} from "./style";
import Header from "../../components/base/Header";
import Comment from "./comment";

function Player(){

    const comments=[
        {username:'jua',text:'hello'},
        {username:'hajung',text:'bye'},
        {username:'hyerin',text:'hungry'}
    ];

    return(
        <MainBackground>
            <Header></Header>
            <VideoBox src = "https://storage.googleapis.com/sttbucket2020/dog1.mp4"></VideoBox>
            <CommentBox>
            <CommentTitle>Comments</CommentTitle>
                {comments.map(
                    (comment,index) => (<Comment 
                    username={comment.username}
                    text={comment.text}/>)
                )}
                
            </CommentBox>
        </MainBackground>
    );
}

export default Player;
