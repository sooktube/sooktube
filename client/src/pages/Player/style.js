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

export const VideoMainContainer = styled.div`
    display: flex;
`

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
