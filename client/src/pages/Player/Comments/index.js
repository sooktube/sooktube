import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from "./style";
import Comment from "./Comment";
import {commentService} from "../../../services/comment.service";
import {userService} from "../../../services/user.service";

function CommentBox({videoID}){
    
    const current_username = useSelector(state => state.authentication.username);
    const comments = useSelector(state => state.comment);
    const dispatch = useDispatch();

    
    const [commentText, setCommentText] = useState('');
    const [newText,setNewText] = useState({username:'',userComment:'',profileUrl:''});
    const [pic, setPic] = useState('');


    useEffect(()=>{
        userService.getUserProfilePic(current_username)
        .then( response => {
            setPic(response);
            console.log(pic);
        })
    })
    
    

    function handleChange(e) {
        setCommentText(e.target.value);
        setNewText({username:current_username,userComment:e.target.value,profileUrl:pic});
    }

    function InputClick(e) {
        if(commentText === ''){
            alert('한 글자 이상 입력해주세요.');
        }
        else {
            commentService.uploadCommentByVideoID({
                videoID,
                username: current_username,
                userComment: newText.userComment
            }).then(response => {
                dispatch({type:'ADD',value:newText});
                setCommentText('');
            })
        }
    }

   

    return(
        <>
        <S.CommentBox>
            <S.CommentTitle>Comments  {comments.length}</S.CommentTitle>
            <S.AddCommentWrapper>
            <S.UserProfile src={pic}/>
            <S.TextInput
                         placeholder="댓글 추가" value={commentText}
                         onChange={handleChange} />
            <S.SubmitButton onClick={InputClick} />
            </S.AddCommentWrapper>
            {comments.map((comment,index) =>
                <Comment
                    key={index}
                    videoID = {p_videoID}
                    commentID = {comment.commentID}
                    length={comments.length}
                    index={index}
                    username={comment.username}
                    text={comment.userComment}
                    photo={comment.profileUrl}/>
                    
            )}
        </S.CommentBox>
        </>
    );
}

export default CommentBox;
