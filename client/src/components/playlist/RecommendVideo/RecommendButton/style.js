import styled from "styled-components";
import {IoIosHeart} from "react-icons/all";

export const Recommend = styled(IoIosHeart)`
    width: 3rem;
    height: 2.2rem;
    margin-right: 1em;
    cursor: pointer;
    color: ${props => props.on === 1 ? '#71A6C6' : '#cecece'}
`;