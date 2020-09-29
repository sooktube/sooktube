import styled from 'styled-components';
import {FaPlus} from "react-icons/all";
import {MAIN} from "../../style/Main";

export const AddVideoButtonWrapper = styled.div`
    margin-top: 2rem;
    padding-left: 2rem;
`;

export const IsPublicComment = styled.div`
    font-size: 1em;
    color: grey;
    margin-bottom: 1em;
`
export const AddVideoComment = styled.span`
    color: ${MAIN.DARK_TEXT_COLOR};
    position: relative;
    top: 0.1rem;
    font-size: 1rem;
    margin-left: 0.2em;
`;

export const CopyButton = styled.button`
    float:right;
    margin-right:1.7em;
    font-size: 1rem;
    font-weight:500;
    border-radius:5px;
    border: 0;
    padding:0.5em 1em 0.5em 1em;
    color:white;
    background-color: ${MAIN.BASE_COLOR};
    &:focus{
        outline:none;
    }
    &:hover{
        background-color:${MAIN.BRIGHT_ON_HOVER};
    }
`;


export const PlusButton = styled(FaPlus)`
    color: ${MAIN.BASE_COLOR};
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    &:hover {
      color: ${MAIN.BRIGHT_ON_HOVER}
    }
`;
