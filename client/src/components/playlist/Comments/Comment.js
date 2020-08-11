import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from "./style";
import useDropdownOutsideClick from "../../../hooks/useDropdownOutsideClick";
import {commentService} from "../../../services/comment.service";


function Comment({listID, commentID, length, c_index, username, text, photo}){

    const real_username = useSelector(state => state.authentication.username);
    const comments = useSelector(state => state.comment);
    const dispatch = useDispatch();

    const playlistID = listID;
    const c_commentID = commentID;
    const c_length = length;
    const index = c_index;
    const c_username = username;


    const [createDropdownVisible, setCreateDropdownVisible] = useState(false);
    const [edit,setEdit] = useState(true);
    const [comment,setComment] = useState('');
    const [newText,setNewText]=useState({commentID:null,videoID:null,username:'',userComment:'',profileUrl:''});


 
   

    const toggleDropdown = () => {
        setCreateDropdownVisible(!createDropdownVisible);
    };

    const contentRef = useRef(null);
    
    useDropdownOutsideClick(contentRef, setCreateDropdownVisible);

    function handleChange(e) {
        setComment(e.target.value);
        setNewText({commentID:c_commentID,listID:playlistID,username:c_username,userComment:e.target.value,profileUrl:photo});
    }

    function EditClick(){
        setEdit(false);
    }

    function SaveEdit(){
        if(comment == ''){
            alert('한 글자 이상 입력해주세요.');
        }
        if(comment != ''){
            dispatch({type:"EDIT",value:newText,index:index,length:c_length});
            const c_text = { userComment: newText.userComment };
            commentService.updateCommentByPlaylistID({
                comment: c_text,
                commentID: c_commentID,
                listID: playlistID,
                username: real_username
            })
            .then(response => {
                console.log(response);
            })
            console.log(comments);
            setEdit(true);
    }
    }

    function DeleteClick(){
        if(index==0){
            dispatch({type:"DELETE_FIRST", length:c_length});
        }
        else{
            dispatch({type:"DELETE", index:index, length:c_length});
        }
        commentService.deleteCommentByPlaylistID({
            commentID: c_commentID,
            listID: playlistID,
            username: real_username
        }).then(response => {
            console.log(response);
        })
        console.log(comments);
    }

  

    


    return(
        <S.CommentContainer>
            <S.Photo src={photo}/>
            {edit && <S.TextBox>
                <S.Username>{username}</S.Username>
                <S.Text>{text}</S.Text>
            </S.TextBox>}
            {(real_username == username) && edit && <S.DotIcon onClick={toggleDropdown}/> }
            {!edit && <S.EditInput value={comment} onChange={handleChange}/>}
            {!edit && <S.SaveButton onClick={SaveEdit}>저장</S.SaveButton>}

            {createDropdownVisible &&
                    <S.CreateDropdownContent ref={contentRef}>
                        <S.EditButton  onClick={EditClick}> 수정 </S.EditButton>
                        <S.EditButton  onClick={DeleteClick}> 삭제</S.EditButton>
                    </S.CreateDropdownContent>
            }
        </S.CommentContainer>
    );
}

export default Comment;