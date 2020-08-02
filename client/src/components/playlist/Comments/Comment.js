import React from 'react';
import * as S from "./style";

function Comment({username, text, photo}){
    return(
        <S.CommentWrapper>
            <S.Photo src={photo}/>
            <S.TextBox>
                <S.Username>{username}</S.Username>
                <S.Text>{text}</S.Text>
            </S.TextBox>
        </S.CommentWrapper>
    );
}

export default Comment;