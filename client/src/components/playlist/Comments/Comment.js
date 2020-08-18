import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from "./style";
import useDropdownOutsideClick from "../../../hooks/useDropdownOutsideClick";
import {commentService} from "../../../services/comment.service";

function Comment({listID, commentID, length, index, username, text, photo}){
    const current_username = useSelector(state => state.authentication.username);
    const dispatch = useDispatch();

    const [createDropdownVisible, setCreateDropdownVisible] = useState(false);
    const [edit,setEdit] = useState(true);
    const [comment,setComment] = useState(text);
    const [newText,setNewText]=useState({
        commentID:null,
        listID:null, 
        username:'',
        userComment: '',
        profileUrl:''
    });

    

    const toggleDropdown = () => {
        setCreateDropdownVisible(!createDropdownVisible);
    };

    const contentRef = useRef(null);
    
    useDropdownOutsideClick(contentRef, setCreateDropdownVisible);

    function handleChange(e) {
        setComment(e.target.value);
        setNewText({commentID, listID, username, userComment: e.target.value, profileUrl:photo});
    }

    function EditClick(){
        setComment(text);
        setEdit(false);
        setNewText({commentID, listID, username, userComment: text, profileUrl:photo});
    }

    function SaveEdit(){
        if(comment === '') {
            alert('한 글자 이상 입력해주세요.');
        }
        else {
            const c_text = { userComment: newText.userComment };
            commentService.updateCommentByPlaylistID({
                comment: c_text,
                commentID,
                listID,
                username: current_username
            })
            .then(() => {
                dispatch({type:"EDIT",value:newText,index,length});
                setEdit(true);
            })
        }
    }

    function DeleteClick(){
        commentService.deleteCommentByPlaylistID({
            commentID,
            listID,
            username: current_username
        }).then(() => {
            if(index === 0){
                dispatch({type:"DELETE_FIRST", length});
            }
            else dispatch({type:"DELETE", index, length});
        })
    }

    return(
        <S.CommentContainer>
            <S.Photo src={photo}/>
            {edit && <S.TextBox>
                <S.Username>{username}</S.Username>
                <S.Text>{text}</S.Text>
            </S.TextBox>}
            {current_username === username && edit && <S.DotIcon onClick={toggleDropdown}/> }
            {!edit && <S.EditInput value={comment} onChange={handleChange}/>}
            {!edit && <S.SaveButton onClick={SaveEdit}/>}
            {createDropdownVisible &&
                    <S.CreateDropdownContent ref={contentRef}>
                        <S.EditButton  onClick={EditClick}> 수정 </S.EditButton>
                        <S.EditButton  onClick={() => {
                            if(window.confirm('댓글을 삭제하시겠습니까?')) DeleteClick()}}> 삭제</S.EditButton>
                    </S.CreateDropdownContent>
            }
        </S.CommentContainer>
    );
}

export default Comment;