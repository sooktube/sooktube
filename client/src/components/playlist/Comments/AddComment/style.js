import styled from "styled-components";
import {MAIN} from "../../../style/Main";
import {RiChatUploadLine} from "react-icons/all";

export const AddCommentWrapper = styled.div`
    height: 3rem;
    display: flex;
    color: darkgrey;
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
      border-bottom: 3px solid ${MAIN.BASE_COLOR};
    }
`;

export const SubmitButton = styled(RiChatUploadLine)`
    width: 5vw;
    height: 5vh;
    padding-top: 0;
    text-align: center;
    border-radius: 50%;
`;
