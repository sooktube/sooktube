import React,{ useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from "./style";
import useDropdownOutsideClick from "../../../hooks/useDropdownOutsideClick";
import {commentService} from "../../../services/comment.service";
import CommentReplyList from "./CommentReplyList";

function Comment({listID, commentID, length, index, username, userComment, profileUrl, userPic}){
    const currentUsername = useSelector(state => state.authentication.username);
    const comments = useSelector(state => state.comment);
    const dispatch = useDispatch();

    const [createDropdownVisible, setCreateDropdownVisible] = useState(false);
    const [edit, setEdit] = useState(true);
    const [reply, setReply] = useState(false);
    const [commentCount, setCommentCount] = useState(0);
   
    const [comment,setComment] = useState(userComment);
    const [newText,setNewText]=useState({
        commentID:null,
        listID:null,
        username:'',
        userComment: '',
        profileUrl:'',
        parent:0
    });

    useEffect(()=>{
        const replyComment = comments.filter(comment=>comment.parent===commentID);
        setCommentCount(replyComment.length);
    },[comments]);

    const toggleDropdown = () => {
        setCreateDropdownVisible(!createDropdownVisible);
    };

    const contentRef = useRef(null);

    useDropdownOutsideClick(contentRef, setCreateDropdownVisible);

    function handleChange(e) {
        setComment(e.target.value);
        setNewText({commentID, listID, username, userComment: e.target.value, profileUrl, parent:0});
    }

    function EditClick(){
        setComment(userComment);
        setEdit(false);
        setNewText({commentID, listID, username, userComment: comment, profileUrl, parent:0});
    }

    function SaveEdit(){
        if(comment === ''){
            alert('한 글자 이상 입력해주세요.');
        }
        else{
            const text = { userComment: newText.userComment };
            commentService.updateCommentByPlaylistID({
                comment: text,
                commentID,
                listID,
                username: currentUsername
            })
            .then(()=> {
                dispatch({type:"EDIT",value:newText,index:index,length});
                setEdit(true);
            })
        }
    }

    function DeleteClick(){
        commentService.deleteCommentByPlaylistID({
            commentID,
            listID,
            seq: 1,
            username: currentUsername
        }).then(() => {
            if(index === 0){
                dispatch({type:"DELETE_FIRST", length});
            }
            else dispatch({type:"DELETE", index:index, length});
        })
    }

    function ReplyClick(){
        setReply(!reply);
    }


    return(
        <S.CommentContainer>
            <S.Photo src={profileUrl}/>
            {edit && 
            <S.TextBox>
                <S.Username>{username}</S.Username>
                <S.Text>{userComment}</S.Text>
            <S.ReplyButton onClick={ReplyClick}>
                <S.ArrowDropdown/> REPLY {commentCount}
            </S.ReplyButton>
                {reply && <CommentReplyList userPic ={userPic} listID={listID} commentID={commentID}/>}
            </S.TextBox>}
            {(currentUsername === username) && edit && <S.DotIcon onClick={toggleDropdown}/> }
            {!edit && <S.EditInput value={comment} onChange={handleChange}/>}
            {!edit && <S.SaveButton onClick={SaveEdit}/>}

            {createDropdownVisible &&
            <S.CreateDropdownContent ref={contentRef}>
                <S.EditButton onClick={EditClick}> 수정 </S.EditButton>
                <S.EditButton onClick={() => {
                    if(window.confirm('댓글을 삭제하시겠습니까?')) DeleteClick()}}> 삭제</S.EditButton>
            </S.CreateDropdownContent>
            }
        </S.CommentContainer>
    );
}

export default Comment;