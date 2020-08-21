import styled from 'styled-components';
import {FaSearch} from "react-icons/all";
import {MAIN} from "../../../style/Main";

export const SearchButtonWrapper = styled.div`
    width: 3em;
    height: 3em;
    margin: 0.5em 1.5em 0 auto;
    border-radius: 40%;
`;

export const SearchIcon = styled(FaSearch)`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    position: relative;
    top: 0.5em;
    left: 0.5em;
    color: ${MAIN.BASE_COLOR};
    &:hover {
      color: ${MAIN.BRIGHT_ON_HOVER};
    }
`;