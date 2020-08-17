import styled from "styled-components";
import {TiThumbsUp} from "react-icons/all";

export const Like = styled(TiThumbsUp)`
    width: 3rem;
    height: 2.2rem;
    margin: 0 1em 0 0;
    cursor: pointer;
    color: ${props => props.on === 1 ? '#71A6C6' : '#cecece'}
`;