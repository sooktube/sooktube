import React from 'react';
import * as S from "./style";
import Comment from "./Comment";
import AddComment from "./AddComment";
import comments from './dummy_comments';

function Comments() {
    return(
        <S.CommentsWrapper>
            <S.CommentTitle>Comments  {comments.length}</S.CommentTitle>
            <AddComment/>
            {comments.map(
                (comment,index) => (<Comment
                    username={comment.username}
                    text={comment.text}
                    photo={comment.photo}/>)
            )}
        </S.CommentsWrapper>
    );
}

export default Comments;
