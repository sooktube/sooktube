import styled from 'styled-components';
import {MAIN} from "../../style/Main";

export const CommentsWrapper = styled.section`
  margin-top: 1rem;
  height: 25rem;
  background-color: white;
  padding: 1rem;
  border-radius: 15px;
  overflow: auto;
`;

export const CommentWrapper = styled.section`
  margin-top: 1rem;
  display: flex;
`;

export const CommentTitle = styled.div`
    font-size: 1.2rem;
    color: ${MAIN.DARK_TEXT_COLOR};
    margin-bottom:1.5rem;
`;

export const Photo = styled.img`
    width:5vh;
    height:5vh;
    border-radius:2.5vh;
`;

export const TextBox = styled.div`
    margin-left:1.5em;

`;

export const Username = styled.div`
    position:static;
    font-weight:500;
    font-size:2.2vh;
    margin-bottom:0.5em;
    color:gray;
`;

export const Text = styled.div`
    font-size: 1em;
    line-height: 1.1em;
`;