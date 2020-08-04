import styled from 'styled-components'
import {MAIN} from "../../style/Main";

export const VideoWrapper = styled.div`
    width:100%;
    padding:14px;
    border-bottom:1px solid #ced4da;
    border-top:1px solid #ced4da;
    display:flex;
    color: ${MAIN.DARK_TEXT_COLOR};
`;

export const Video = styled.video`
    width:112px;
    height:63px;
    display:inline-block;
`;


export const VideoTitle = styled.div`
    font-weight:bold;
    text-align: left;
    font-size: 1.5rem;
`;

export const VideoInfo = styled.div`
    font-size: 2vh;
    margin-left: 1em;
    div {
      margin-right: 1em;
    }
`;

export const VideoDetail = styled.div`
    font-size: 1rem;
    display: flex;
    margin-top: 2rem;
`;
