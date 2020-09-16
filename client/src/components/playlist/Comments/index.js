import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from "./style";
import Comment from "./Comment";
import {commentService} from "../../../services/comment.service";
import {authService} from "../../../services/auth.service";
import defaultProfileImg from "../../../../public/defaultProfile.png";

function CommentBox({listID}){
    const currentUsername = useSelector(state => state.authentication.username);
    const comments = useSelector(state => state.comment);
    const dispatch = useDispatch();

    const [comment, setComment] = useState('');
    const [userPic, setUserPic] = useState(defaultProfileImg);
    const [commentCount, setCommentCount] = useState(0);
    const [newText,setNewText] = useState({username:'',userComment:'',profileUrl:'',parent:null});

    useEffect(()=>{
        authService.getUserProfilePic(currentUsername)
            .then(response => {
                setUserPic(response);
            })
    })

    useEffect(()=>{
        const originalComment = comments.filter(comment=>comment.parent===0);
        setCommentCount(originalComment.length);
    },[comments]);

    

    function handleChange(e) {
        setComment(e.target.value);
        setNewText({username:currentUsername, userComment:e.target.value, profileUrl:userPic, parent:0});
    }

    function InputClick(e) {
        if(comment === ''){
            alert('한 글자 이상 입력해주세요.');
        }
        else {
            commentService.uploadCommentByPlaylistID({
                listID,
                username: currentUsername,
                userComment: newText.userComment
            }).then(() => {
                dispatch({type:'ADD',value:newText});
                setComment('');
            })
        }
    }

    return(
        <S.CommentBox>
            <S.CommentTitle>Comments  {commentCount}</S.CommentTitle>
            <S.AddCommentWrapper>
                <S.UserProfile src={userPic}/>
                <S.TextInput placeholder="댓글 추가"
                             value={comment}
                             onChange={handleChange}/>
                <S.SubmitButton onClick={InputClick} />
            </S.AddCommentWrapper>
            {comments.map((comment,index) =>
            (comment.parent === 0) &&
                <Comment
                    key={index}
                    listID = {listID}
                    commentID = {comment.commentID}
                    length={comments.length}
                    index={index}
                    username={comment.username}
                    userComment={comment.userComment}
                    profileUrl={comment.profileUrl}
                    userPic={userPic}/>
            )}
        </S.CommentBox>
    );
}

export default CommentBox;