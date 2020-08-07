import React, { useState,useEffect,useRef,createContext,useContext } from 'react';
import * as S from "./style";
import Comment from "./Comment";
import { CommentProvider, useCommentState,useCommentDispatch,useTextState } from "../CommentContext";
import { useDispatch, useSelector } from 'react-redux';
import {commentActions} from "../../../actions";

function CommentBox({c_username}){
    const username1 =c_username;

    const comments = useSelector(state => state.comment);
    const dispatch = useDispatch();
    
    console.log(comments);
    const [comment1, setComment1] = useState('');
    const [input,setInput]=useState(0);
    const [a,setA]=useState(0);
    const [newText,setNewText]=useState({username:'',text:'',photo:''});
    const [openindex,setOpenIndex] = useState(-1);
    
    
    


    function handleChange(e) {
        setComment1(e.target.value);
        setNewText({username:username1,text:e.target.value,photo:'https://storage.googleapis.com/sttbucket2020/sunset.jpg'});
        console.log(comments);
    }

    function InputClick(e) {
        dispatch({type:'ADD',value:newText});
        const a='클릭';
        console.log(a);
        console.log(comments);
        setComment1('');
    }

    useEffect(()=>{
        console.log(comments);
        
    });

    
    

    


    return(
        <CommentProvider value={comments}>
            
        <S.CommentBox>
        
            <S.CommentTitle>Comments  {comments.length}</S.CommentTitle>
            <S.AddCommentWrapper>
            <S.UserProfile src="https://storage.googleapis.com/sttbucket2020/sunset.jpg"/>
            <S.TextInput
                         placeholder="댓글 추가" value={comment1}
                         onChange={handleChange}
                         />
            <S.SubmitButton onClick={InputClick} />
            </S.AddCommentWrapper>
            

            {comments.map((comment,index) =>
                <Comment
                    length={comments.length}
                
                    key={index}
                    username1={index}
                    username={comment.username}
                    text={comment.text}
                    photo={comment.photo}/>   
            )}
           
        </S.CommentBox>
       
        </CommentProvider>
    );
}

export default CommentBox;
