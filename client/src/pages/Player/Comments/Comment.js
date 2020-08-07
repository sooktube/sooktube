import React,{useState,useRef,createContext,useEffect,useContext} from 'react';
import * as S from "./style";
import useDropdownOutsideClick from "../../../hooks/useDropdownOutsideClick";
import { CommentProvider, useCommentState,useCommentDispatch,useTextState ,useTextDispatch} from "../CommentContext";
import { useDispatch, useSelector } from 'react-redux';
import {commentActions} from "../../../actions";



function Comment({length,username1, username, text, photo}){

    const real_username = useSelector(state => state.authentication.username);

    const comments = useSelector(state => state.comment);
    const dispatch=useDispatch();
    const index=username1;
    let inputText=text;
    const username2=username;
    const last = length;
    const [createDropdownVisible, setCreateDropdownVisible] = useState(false);
    const [edit,setEdit] = useState(true);
    const [comment,setComment] = useState('');
    const [newText1,setNewText1]=useState({username:'',text:'',photo:''});


 
   

    const toggleDropdown = () => {
        setCreateDropdownVisible(!createDropdownVisible);
    };

    const contentRef = useRef(null);
    
    useDropdownOutsideClick(contentRef, setCreateDropdownVisible);

    function handleChange(e) {
        setComment(e.target.value);
        setNewText1({username:username2,text:e.target.value,photo:'https://storage.googleapis.com/sttbucket2020/sunset.jpg'});
    }

    function EditClick(){
        setEdit(false);
    }
    function SaveEdit(){
        dispatch({type:"EDIT",value:newText1,index:index,length:last});
        console.log(comments);
        setEdit(true);
    }

    function DeleteClick(){
        setNewText1({username:username2,text:inputText,photo:'https://storage.googleapis.com/sttbucket2020/sunset.jpg'});
        if(index==0){
            dispatch({type:"DELETE_FIRST",length:last});
        }
        else{
            dispatch({type:"DELETE",index:index,length:last});

        }
        console.log(comments);
    }

    useEffect(()=>{
        const q='댓글하나박스 마운트'
        console.log(q);
    },);


    return(
        <S.CommentContainer>
            <S.Photo src={photo}/>
            {edit && <S.TextBox>
                <S.Username>{username}</S.Username>
                <S.Text>{inputText}</S.Text>
            </S.TextBox>}
            {(real_username==username)&& edit && <S.DotIcon onClick={toggleDropdown}/> }
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