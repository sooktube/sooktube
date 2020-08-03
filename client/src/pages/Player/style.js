import styled from 'styled-components'
import {IoIosHeart, IoMdHeartDislike} from "react-icons/all";
import {MAIN} from "../../components/style/Main";

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
`;

export const VideoDesc = styled.div`
    margin-top: 1rem;
    font-size: 1.2rem;
`;

export const VideoInfo = styled.div`
    margin-top: 1em;  
    display: flex;
    font-family: Georgia, sans-serif;
    justify-content: space-between;
`;

export const VideoDate = styled.div`
    font-size: 1.2em;
`;

export const VideoLike = styled.div`
    font-size: 1.3em;
    span {
      margin-right: 0.5em;
    }
`;
export const Heart = styled(IoIosHeart)`
    margin-right: 0.2em;
    width: 1.5em;
    height: 1.5em;
    color: ${MAIN.MAIN_THEME_COLOR};
`;

export const DislikeHeart = styled(IoMdHeartDislike)`
    width: 1.5em;
    height: 1.5em;
    color: ${MAIN.MAIN_THEME_COLOR};
`;


