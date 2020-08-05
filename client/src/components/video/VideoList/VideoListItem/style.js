import styled from 'styled-components'
import {MAIN} from "../../../style/Main";
import {IoIosHeart, IoMdHeartDislike} from "react-icons/all";
import {Link} from 'react-router-dom';

export const VideoWrapper = styled.div`
    padding:14px;
    border-bottom:1px solid #ced4da;
    display:flex;
    color: ${MAIN.DARK_TEXT_COLOR};
`;

export const Video = styled.video`
    width: 150px;
    height: 84px;
    cursor: pointer;
    display:inline-block;
`;


export const VideoTitle = styled.div`
    font-weight:bold;
    text-align: left;
    font-size: 1.5rem;
`;

export const VideoDescription = styled.div`
    font-size: 1rem; 
    margin-top: 0.5rem; 
`;

export const VideoInfo = styled.div`
    font-size: 2vh;
    margin-left: 1em;
    cursor: pointer;
    div {
      margin-right: 1em;
    }
`;

export const VideoDetail = styled.div`
    font-size: 1rem;
    display: flex;
    margin-top: 2rem;
`;

export const UserButton = styled.div`
     margin-left: auto;
`;

export const StyledLink = styled(Link)`
    color: ${MAIN.DARK_TEXT_COLOR};
    margin-right: 1em;
    &:focus {
      color: ${MAIN.DARK_TEXT_COLOR};
    }
`;
