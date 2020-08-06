import styled from 'styled-components'
import {IoIosHeart, IoMdHeartDislike} from "react-icons/all";
import {MAIN} from "../../components/style/Main";
import {Link} from "react-router-dom";

export const VideoWrapper = styled.div`
    background:#ffffff;
    border-radius: 20px;
    margin-top: 2rem;
    padding: 1rem 1.5rem;
`;

export const VideoContainer = styled.div`
    margin-top: 1rem;
    @media (max-width: 1919px) {
    width: calc(60% - 1rem);
    }
    @media (max-width: 1440px) {
    width: calc(50% - 1rem);
    }
    @media (max-width: 1312px) {
    width: calc(50% - 1rem);
    }
    @media (max-width: 944px) {
    width: calc(80% - 1rem);
    margin-left: auto;
    margin-right: auto;
    }
    @media (max-width: 767px) {
    width: calc(100% - 2rem);
    margin-left: auto;
    margin-right: auto;
    }
`;

export const VideoTitle = styled.div`
    margin-top: 1rem;
    font-size: 2rem;
    font-weight:600;
    color: ${MAIN.DARK_TEXT_COLOR};
`;

export const VideoDesc = styled.div`
    margin-top: 1rem;
    font-size: 1.2rem;
`;

export const VideoInfo = styled.div`
    margin-top: 1em;  
    display: flex;
`;

export const VideoDate = styled.div`
    font-size: 1.2em;
`;

export const VideoUsername = styled.div`
    font-size: 1.2em;
`;

export const VideoLike = styled.div`
    font-size: 1.3em;
    margin-left: auto;
    span {
      margin-right: 0.5em;
    }
`;
export const Heart = styled(IoIosHeart)`
    margin-right: 0.2em;
    width: 1.5em;
    height: 1.5em;
    color: ${props => props.on === 1 ? '#71A6C6' : '#e5e5e5'}
`;

export const DislikeHeart = styled(IoMdHeartDislike)`
    width: 1.5em;
    height: 1.5em;
     color: ${props => props.on === 1 ? '#71A6C6' : '#e5e5e5'}
`;

export const EditButton = styled(Link)`
    color: ${MAIN.DARK_TEXT_COLOR};
    margin-right: 1em;
    &:hover {
      color: ${MAIN.DARK_TEXT_COLOR};
    }
`;

export const Separator = styled.div`
    margin: 0 1em;
    color: #e5e5e5;
`;
