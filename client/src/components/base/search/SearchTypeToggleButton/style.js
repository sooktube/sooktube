import styled from 'styled-components';
import {BsBookmarkFill, MdVideoLibrary} from "react-icons/all";

export const ButtonWrapper = styled.div`
    background-color: #fff;
    position: relative;
    z-index: 10;
    padding: 1em 0;
    width: 50px;
    height: 9.5em;
    border-radius: 15px;
`;

export const PlaylistButton = styled(BsBookmarkFill)`
    position: relative;
    left: -2.7em;
    top: 1em;
    width: 115px;
    height: 45px;
    cursor: pointer;
    transition: 0.3s;
    color: ${props => props.on === "playlist" ? '#71A6C6' : '#ADAEAF'}
`;

export const VideoButton = styled(MdVideoLibrary)`
    width: 35px;
    height: 35px;
    margin-left: 7px;
    cursor: pointer;
    transition: 0.3s;
    color: ${props => props.on === "video" ? '#71A6C6' : '#ADAEAF'}
`;