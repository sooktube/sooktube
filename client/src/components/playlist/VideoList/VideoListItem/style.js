import styled from 'styled-components'
import {MAIN} from "../../../style/Main";
import {AiOutlineDelete, IoMdHeartDislike, TiInputChecked} from "react-icons/all";

export const VideoWrapper = styled.div`
    padding:14px;
    height: 8rem;
    border-bottom:1px solid #ced4da;
    display:flex;
    color: ${MAIN.DARK_TEXT_COLOR};
`;

export const Video = styled.video`
    width:112px;
    height:63px;
    cursor: pointer;
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
    width:50%;
    cursor: pointer;
    div {
      margin-right: 1em;
    }
`;

export const DeleteButton = styled(AiOutlineDelete)`
    width:1.1rem;
    height:1.2rem;
    &:hover{
        color:#adb5bd;
    }
`;

export const VideoDetail = styled.div`
    font-size: 1rem;
    display: flex;
    margin-top: 2rem;
`;

export const VideoLike = styled.div`
    margin-left: auto;
    display: flex;
    div {
      margin-right: 1em;
    }
`;

export const Disrecommned = styled(IoMdHeartDislike)`
    width: 3rem;
    height: 2.2rem;
    color: ${props => props.on === 1 ? '#71A6C6' : '#cecece'}
`

export const InVideoList = styled(TiInputChecked)`
    color: forestgreen;
    width: 1.5em;
    height: 1.5em;
    display: ${props => (props.count >= 5 && props.checkplaylist) ? 'inline-block' : 'none'};
`;