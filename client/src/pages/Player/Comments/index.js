import React from 'react';
import * as S from "./style";
import Comment from "./comment";

function CommentBox(){
    const comments=[
        {username:'hyerin',text:'I hope you think of me high',photo:'https://storage.googleapis.com/sttbucket2020/sunset.jpg'},
        {username:'hajung',text:'when you are with someone else',photo:'https://storage.googleapis.com/sttbucket2020/sunset.jpg'},
        {username:'jua',text:'today i called to tell you that im changing',photo:'https://storage.googleapis.com/sttbucket2020/sunset.jpg'}
    ];

    return(
        <S.CommentBox>
            <S.CommentTitle>Comments  {comments.length}</S.CommentTitle>
            {comments.map(
                (comment,index) => (<Comment
                    username={comment.username}
                    text={comment.text}
                    photo={comment.photo}/>)
            )}

        </S.CommentBox>
    );
}

export default CommentBox;
