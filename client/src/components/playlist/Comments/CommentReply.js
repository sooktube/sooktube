import React,{ useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from "./style";
import useDropdownOutsideClick from "../../../hooks/useDropdownOutsideClick";
import {commentService} from "../../../services/comment.service";

function CommentReply({listID, commentID, index, length, profileUrl, username, userComment, parent, seq}){
    const currentUsername = useSelector(state => state.authentication.username);
    const dispatch = useDispatch();

    const [createDropdownVisible, setCreateDropdownVisible] = useState(false);
    const [edit,setEdit] = useState(true);
    const [comment,setComment] = useState(userComment);

    const [newReply, setNewReply] = useState({
        commentID:'',
        username:'',
        userComment:'',
        profileUrl:'',
        parent:null,
        seq:0
    });

    const toggleDropdown = () => {
        setCreateDropdownVisible(!createDropdownVisible);
    };

    const contentRef = useRef(null);

    useDropdownOutsideClick(contentRef, setCreateDropdownVisible);

    function handleChange(e) {
        setComment(e.target.value);
        setNewReply({commentID, username: currentUsername , userComment: e.target.value, profileUrl, parent , seq});
    }

    function EditClick(){
        setComment(userComment);
        setEdit(false);
        setNewReply({commentID, username: currentUsername , userComment: comment, profileUrl, parent , seq});
    }

    function SaveEdit(){
        if(comment === ''){
            alert('한 글자 이상 입력해주세요.');
        }
        else{
            const text = { userComment: newReply.userComment };
            commentService.updateCommentByPlaylistID({
                comment: text,
                commentID,
                listID,
                username: currentUsername
            })
            .then(()=> {
                dispatch({type:"EDIT", value:newReply, index:index, length});
                setEdit(true);
            })
        }
    }

    function DeleteClick(){
        commentService.deleteCommentByPlaylistID({
            commentID,
            listID,
            seq,
            username: currentUsername
        }).then(() => {
            if(index === 0){
                dispatch({type:"DELETE_FIRST", length});
            }
            else dispatch({type:"DELETE", index:index, length});
        })
    }
    
    return(    
        <S.AddReplyWrapper>
                <S.ReplyProfile src={profileUrl}/>
                {edit && 
                <S.TextBox>
                    <S.Username>{username}</S.Username>
                    <S.Text>{userComment}</S.Text>
                </S.TextBox> }
                {(currentUsername === username) && edit && <S.DotIcon onClick={toggleDropdown}/> }
                {!edit && <S.ReplyInput value={comment} onChange={handleChange}/>}
                {!edit && <S.ReplySubmit onClick={SaveEdit}/>}

                {createDropdownVisible &&
                <S.CreateDropdownContent ref={contentRef}>
                <S.EditButton onClick={EditClick}> 수정 </S.EditButton>
                <S.EditButton onClick={() => {
                if(window.confirm('댓글을 삭제하시겠습니까?')) DeleteClick()}}> 삭제 </S.EditButton>
                        </S.CreateDropdownContent>
                }
        </S.AddReplyWrapper>
    )
}

export default CommentReply;