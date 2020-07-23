import React from 'react';
import {CommentContainer, Username,Text} from "./style";


function Comment({username, text}){
    return(
        <CommentContainer>
            <Username>{username}</Username>
            <Text>{text}</Text>
        </CommentContainer>
    );
}

export default Comment;
