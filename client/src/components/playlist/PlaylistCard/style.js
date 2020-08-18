import styled from "styled-components";
import {MdEdit, MdDelete, BsThreeDotsVertical} from "react-icons/all";
import {MAIN} from "../../style/Main";

export const CardWrapper = styled.div`
    height: 25rem;
    width: 100%;
    display: flex;
    border-radius: 15px;
    background-color: white;
    box-shadow:  10px 10px 20px #d3d3d9, -12px -12px 20px #ffffff;
`;

export const CardImage = styled.img`
    width: 50%;
    height: 100%;
    border-radius: 15px;
`;

export const CardInfo = styled.div`
   height: 100%;
   width: 50%;
   flex-flow:column;
`;

export const CardTitle = styled.div`
    margin-top: 1em;
    padding: 1.5em 1em 2em 1em;
    height: 3rem;
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    color: ${MAIN.DARK_TEXT_COLOR};
    font-weight: bold;
`;

export const EditBox = styled.div`
    width:240px;
`;

export const EditWrapper = styled.div`
    float:right;
    display:flex;
    justify-content:center;
`;

export const CardDesc = styled.div`
    font-size: 1rem;
    margin-top: 1rem;
    height: 13.5rem;
    padding: 1em;
    line-height: 1.5em;
`;





export const CardBottom = styled.div`
    font-size: 1.2rem;
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
    position:relative;
`;

export const DotIcon = styled(BsThreeDotsVertical)`
    width: 2vw;
    height: 4vh;
    float:right;
    color: ${MAIN.BORDER_COLOR};
    &:hover {
	  cursor:pointer;
      color:#868e96;
    }
`;

export const CreateDropdownContent = styled.div`
    position: absolute;
    margin-top: 2em;
    right: 2em;
    z-index: 200;
    border-radius: 15px;
    box-shadow: -0.05px -0.05px 10px rgba(0,0,0,0.2) ;
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

export const Separator = styled.div`
    margin: 1em auto 1em auto;
    height: 0.2em;
    width: 5em;
    background-color: ${MAIN.BASE_COLOR}
`;







export const CardAuthor = styled.div`
    font-family: Georgia, sans-serif;
    font-style: italic;
`;

