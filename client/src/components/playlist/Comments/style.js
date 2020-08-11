import styled from 'styled-components';
import {MAIN} from "../../style/Main";
import {RiChatUploadLine,BsThreeDotsVertical} from "react-icons/all";

export const CommentBox = styled.div`
    width:100%;
    margin-top:2%;
    background:#ffffff;
    display:block;
    padding-top:1%;
    padding-bottom:2.5%;
`;

export const CommentContainer= styled.div`
    width:100%;
    display: flex;
    position:relative;
    flex-direction:row;
    margin-top:1em;
    margin-bottom:1em;
    text-align:left;
    vertical-align:top;
    padding:1vh;
`;

export const CommentTitle = styled.div`
    position:static;
    font-size:2.6vh;
    font-weight:550;
    margin-top:1.4em;
    margin-left:1em;
    margin-bottom:1em;
    
`;

export const Photo = styled.img`
    width:5vh;
    height:5vh;
    border-radius:2.5vh;
    margin-left:0.3em;
`;

export const TextBox = styled.div`
    margin-left:1.5em;
    width:90%;
`;

export const EditInput = styled.input`
    margin-left:1.5em;
    width:70%;
    border-top:0px;
    border-left:0px;
    border-right:0px;
    &:focus{
        outline:none;
    }
`;

export const SaveButton = styled.button`
    border:none;
    font-size:1.8vh;
    margin-left:1.5em;
    padding: 0.3em 0.6em 0.3em 0.6em;
    font-weight:500;
    color:white;
    background-color:#adb5bd;
    border-radius:2px;
    &:hover {
        background-color:#ced4da;
    }
`;

export const Username = styled.div`
    position:static;
    font-weight:500;
    font-size:2.2vh;
    margin-bottom:0.5em;
    color:gray;
`;

export const Text = styled.div`
    font-size:2.5vh;
`;

export const AddCommentWrapper = styled.div`
    height: 3rem;
    display: flex;
    color: darkgray;
    &:focus-within {
      color: ${MAIN.MAIN_THEME_COLOR};
    }
`;
export const UserProfile = styled.img`
    width:5vh;
    height:5vh;
    margin-left:1em;
    margin-top: 0.2em;
    border-radius:2.5vh;
`;


export const TextInput = styled.input`
    font-size:2.5vh;
    padding-bottom: 0.3em;
    width: 70%;
    margin-left: 1em;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom: 2px solid ${MAIN.BORDER_COLOR};
    &:focus {
      outline: none;
      transition: border-color 0.5s ease;  
      border-bottom: 3px solid ${MAIN.MAIN_THEME_COLOR};
    }
`;

export const SubmitButton = styled(RiChatUploadLine)`
    width: 5vw;
    height: 5vh;
    padding-top: 0;
    text-align: center;
    border-radius: 50%;
    &:hover {
	cursor:pointer;
    }
`;

export const DotIcon = styled(BsThreeDotsVertical)`
    width: 4vw;
    height: 4vh;
    float:right;
    &:hover {
	cursor:pointer;
    }
`;

 
export const CreateDropdownContent = styled.div`
    position: absolute;
    margin-top: 2.2em;
    right: 5px;
    
    border-radius: 2%;
    z-index: 200;
    box-shadow: -0.05px -0.05px 5px grey ;
`;

export const EditButton = styled.button`
    padding: 1em 2em 1em 2em;
    font-size: 1.8vh;
    font-weight:400;
    color:#495057;
    background-color:white;
    text-decoration: none;
    display: block;
    border:none;
    &:hover {
        text-decoration: none;
        background-color: #dee2e6;
    }
`;