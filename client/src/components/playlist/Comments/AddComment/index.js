import React, {useState} from 'react';
import * as S from "./style";

function AddComment({username, photo}) {
    const [comment, setComment] = useState(null);

    function handleChange(e) {
        setComment(e.target.value);
    }

    return(
        <S.AddCommentWrapper>
            <S.UserProfile src="https://storage.googleapis.com/sttbucket2020/sunset.jpg"/>
            <S.TextInput value={comment}
                         placeholder="댓글 추가"
                         name="comment"
                         onChange={handleChange}/>
            <S.SubmitButton/>
        </S.AddCommentWrapper>
    );
}

export default AddComment;