import styled from 'styled-components'
import {MAIN} from "../../style/Main";

export const VideoWrapper = styled.div`
    border-bottom: 1.7px solid #ced4da;
    padding: 1em 0;
    display:flex;
    color: ${MAIN.DARK_TEXT_COLOR};
`;

export const Video = styled.video`
    width: 50%;
    height: 75%;
    cursor: pointer;
    display:inline-block;
`;


export const VideoTitle = styled.div`
    font-weight:bold;
    text-align: left;
    font-size: 14px;
`;

export const VideoDescription = styled.div`
    font-size: 1rem; 
    margin-top: 0.5rem; 
`;

export const VideoInfo = styled.div`
    font-size: 12px;
    margin-left: 1em;
    cursor: pointer;
    div {
      margin-right: 0.5em
    }
    background-color:transparent;
`;

export const VideoDetail = styled.div`
    font-size: 12px;
    display: flex;
    margin-top: 0.5rem;
`;


