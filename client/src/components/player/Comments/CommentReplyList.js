import React,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from "./style";
import {commentService} from "../../../services/comment.service";
import CommentReply from "./CommentReply";

function CommentReplyList({userPic, videoID, commentID}){
    const comments = useSelector(state => state.comment);
    const currentUsername = useSelector(state => state.authentication.username);
    const dispatch = useDispatch();
    
    var count = 1;
    const [replyComment, setReplyComment] = useState('');
    const [newReply, setNewReply] = useState({
        commentID:'',
        username:'',
        userComment:'',
        profileUrl:'',
        parent:null,
        seq:0
    });

    function ReplyChange(e){
        setReplyComment(e.target.value);
        setNewReply({commentID, username: currentUsername, userComment: e.target.value, profileUrl:userPic, parent:commentID,seq:count+1});
    }
    
    function SaveReply(){
        if(replyComment === ''){
            alert('한 글자 이상 입력해주세요.');
        }
        else {
            commentService.uploadReplyByVideoID({
                videoID,
                username: currentUsername,
                userComment: newReply.userComment
            },commentID,count+1)
            .then(() => {
                dispatch({type:'ADD',value:newReply});
                setReplyComment('');
            })
        }
    }

    
    return(
        <>
        <S.AddReplyWrapper>
                <S.ReplyProfile src={userPic}/>
                <S.ReplyInput placeholder="답글 추가" value={replyComment} onChange={ReplyChange}/>
                <S.ReplySubmit onClick={SaveReply}/>
        </S.AddReplyWrapper>
        {comments.map((comment,index) =>
        (comment.parent === commentID) && (count=comment.seq) &&
            <CommentReply key={index}
                          videoID={videoID}
                          commentID={comment.commentID}
                          index={index}
                          length={comments.length}
                          profileUrl={comment.profileUrl}
                          username={comment.username}
                          userComment={comment.userComment}
                          parent={comment.parent}
                          seq={comment.seq}/>
        )}
        </>
    );
}

export default CommentReplyList;