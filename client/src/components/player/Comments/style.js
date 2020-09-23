import styled from 'styled-components'
import {MAIN} from "../../style/Main";
import {RiChatUploadLine, BsThreeDotsVertical, IoMdArrowDropdown} from "react-icons/all";

export const CommentBox = styled.div`
    width: 100%;
    margin-top:2%;
    background:#ffffff;
    padding-top:1%;
`;

export const CommentTitle = styled.div`
    position:static;
    font-size:2.6vh;
    font-weight:550;
    margin-bottom:1em;
`;

export const AddCommentWrapper = styled.div`
    height: 3rem;
    display: flex;
    color: darkgray;
    &:focus-within {
      color: ${MAIN.BASE_COLOR};
    }
`;

export const UserProfile = styled.img`
    width:5vh;
    height:5vh;
    margin-top: 0.2em;
    border-radius:2.5vh;
`;

export const TextInput = styled.input`
    font-size: 12px;
    padding-bottom: 0.3em;
    width: 90%;
    margin-left: 1em;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom: 2px solid ${MAIN.BORDER_COLOR};
    &:focus {
      outline: none;
      transition: border-color 0.5s ease;  
      border-bottom: 3px solid ${MAIN.BASE_COLOR};
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
      color:${MAIN.BASE_COLOR};
    }
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

export const Photo = styled.img`
    width:5vh;
    height:5vh;
    border-radius:2.5vh;
`;

export const TextBox = styled.div`
    margin-left:1.5em;
    width:100%;
`;

export const Username = styled.div`
    position:static;
    font-weight:500;
    font-size:2.2vh;
    margin-bottom:0.5em;
    color:gray;
`;

export const Text = styled.div`
    color:black;
    font-size: 12px;
`;

export const ArrowDropdown = styled(IoMdArrowDropdown)`
    width: 1.5em;
    height: 1.7em;
`;

export const ReplyButton = styled.button`
    display:block;
    margin-top:1em;
    font-size: 12px;
    font-weight: 550;
    border: 0;
    color: ${MAIN.BASE_COLOR};
    background:transparent;
    &:focus{
        outline:none;
    }
`;

export const DotIcon = styled(BsThreeDotsVertical)`
    width: 4vw;
    height: 4vh;
    float:right;
    color: #adb5bd;
    &:hover {
	  cursor:pointer;
      color:#495057;
    }
`;

export const EditInput = styled.input`
    margin-left:1.5em;
    width:90%;
    border-top:0px;
    border-left:0px;
    border-right:0px;
    border-bottom: 2px solid ${MAIN.BORDER_COLOR};
    &:focus{
        outline:none;
        transition: border-color 0.5s ease; 
        border-bottom: 3px solid ${MAIN.BASE_COLOR};
    }
`;

export const SaveButton = styled(RiChatUploadLine)`
    width: 5vw;
    height: 5vh;
    padding-top: 0;
    text-align: center;
    border-radius: 50%;
    color: #868e96;
    &:hover {
      cursor:pointer;
      color:${MAIN.BASE_COLOR};
    }
`;

export const CreateDropdownContent = styled.div`
    position: absolute;
    margin-top: 2.2em;
    right: 3em;
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
        background-color: #f1f1f1;
    }
`;

export const AddReplyWrapper = styled.div`
    margin-top:1em;
    display: flex;
    color: darkgray;
    &:focus-within {
      color: ${MAIN.BASE_COLOR};
    }
`;

export const ReplyProfile = styled.img`
    width:4.5vh;
    height:4.5vh;
    margin-top: 0.2em;
    border-radius:2.25vh;
`;

export const ReplyInput = styled.input`
    width:90%;
    border-top:0px;
    border-left:0px;
    border-right:0px;
    margin-left:1em;
    padding-bottom: 0.2em;
    border-bottom: 2px solid ${MAIN.BORDER_COLOR};
    &:focus{
        outline:none;
        transition: border-color 0.5s ease; 
        border-bottom: 3px solid ${MAIN.BASE_COLOR};
    }
`;

export const ReplySubmit = styled(RiChatUploadLine)`
    width: 4vw;
    height: 4vh;
    padding-top: 0;
    text-align: center;
    border-radius: 50%;
    &:hover {
      cursor:pointer;
      color:${MAIN.BASE_COLOR};
    }
`;








