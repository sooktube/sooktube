import styled from "styled-components";
import {IoIosHeart} from "react-icons/all";

export const Like = styled(IoIosHeart)`
    width: 2rem;
    height: 1.7rem;
    margin-right: 0.3em;
    cursor: pointer;
    color: ${props => props.on === 1 ? '#71A6C6' : '#cecece'}
`;