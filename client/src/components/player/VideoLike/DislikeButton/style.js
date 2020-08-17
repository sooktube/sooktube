import styled from "styled-components";
import {TiThumbsDown} from "react-icons/all";

export const Dislike = styled(TiThumbsDown)`
    width: 3rem;
    height: 2.2rem;
    margin: 0 1em 0 1em;
    cursor: pointer;
    color: ${props => props.on === 1 ? '#71A6C6' : '#cecece'}
`;