import styled from 'styled-components'
import {MAIN} from "../../style/Main";
import {Link} from "react-router-dom";

export const VideoInfoContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 767px) {
        width: calc(100% - 2rem);
        margin-left: auto;
        margin-right: auto;
    }
    padding-bottom: 2em;
    border-bottom: 1.7px solid #ced4da
`;

export const VideoTitle = styled.div`
    margin-top: 1rem;
    font-size: 2rem;
    font-weight:600;
    color: ${MAIN.DARK_TEXT_COLOR};
`;

export const VideoDesc = styled.div`
    margin-top: 1rem;
    font-size: 14px;
`;

export const VideoDetail = styled.div`
    margin-top: 1em;  
    display: flex;
`;

export const VideoDate = styled.div`
    font-size: 1.2em;
    margin-top: 0.5em;
`;

export const VideoUsername = styled(Link)`
    font-size: 1.2em;
    margin-top: 0.5em;        
    color: ${MAIN.DARK_TEXT_COLOR};
    &:hover {
      color: ${MAIN.DARK_TEXT_COLOR};
    }
`;

export const EditButton = styled(Link)`
    color: ${MAIN.DARK_TEXT_COLOR};
    margin-right: 1em;
    margin-top: 0.5em;
    &:hover {
      color: ${MAIN.DARK_TEXT_COLOR};
    }
`;

export const Separator = styled.div`
    margin: 0.5em 1em;
    color: lightgray;
`;
