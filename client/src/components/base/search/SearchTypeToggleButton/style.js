import styled from 'styled-components';
import {BsBookmarkFill, MdVideoLibrary} from "react-icons/all";

export const ButtonWrapper = styled.div`
    background-color: #fff;
    padding: 1em 0;
    width: 4rem;
    height: 10em;
    border-radius: 15px;
`;

export const PlaylistButton = styled(BsBookmarkFill)`
    position: relative;
    left: -2em;
    top: 1em;
    width: 8em;
    height: 4em;
    cursor: pointer;
    color: ${props => props.on === "playlist" ? '#71A6C6' : '#ADAEAF'}
`;

export const VideoButton = styled(MdVideoLibrary)`
    width: 3.2em;
    height: 3.2em;
    margin-left: 0.3em;
    cursor: pointer;
    color: ${props => props.on === "video" ? '#71A6C6' : '#ADAEAF'}
`;