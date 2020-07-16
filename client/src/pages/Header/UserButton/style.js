import styled from 'styled-components';
import {FaRegUserCircle, TiArrowSortedDown, FiPlus} from "react-icons/all";
import { NavLink } from 'react-router-dom';

export const UsernameWrapper = styled.div`
    font-size: 3vh;
    display: flex;
`;

export const Username = styled.div`
    color: white;
    padding: 0.5em 0 0 0.2em;
`;

export const ArrowDown = styled(TiArrowSortedDown)`
    margin: 0.5em 0 0 0.1em;
    color: white;
`;

export const PlusMenu = styled(FiPlus)`
    margin-top: 0.5em;
    color: white;
`;
export const UserIcon = styled(FaRegUserCircle)`
    height: 2em;
    width: 2em;
    margin: 0 0.2em 0 0;
    color: white;
`;

export const DropdownContent = styled.div`
    display: none;
    background-color: #f9f9f9;
    min-width: 7vw;
    margin: 2.5em 1em 0 0;
    border-radius: 5%;
    border: 0.15em solid #e3e3e3;
    z-index: 1;
    &:hover {
        background-color: #e3e3e3;
    }
`;

export const DropdownMenu = styled.div`
    position: absolute;
    top: 2vh;
    right: 3vw;
    font-size: 3vh;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    &:hover ${DropdownContent} {
        display: block;
  }
`;

export const DropdownBtn  = styled.div`
    display: flex;
    position: absolute;
    top: 1vh;
    right: 1vw;
    border: 0;
    margin: 0;
    padding: 0;
`;

export const DropdownPlus  = styled.div`
    display: flex;
    position: absolute;
    top: 1vh;
    right: 7vw;
    border: 0;
    margin: 0;
    padding: 0;
`;

export const StyledLink = styled(NavLink)`
    color: black;
    padding: 0.5em 0.5em 0.5em 0.5em;
    margin: 0;
    font-size: 0.8em;
    text-decoration: none;
    display: block;
    &:hover {
        color: black;
        text-decoration: none;
    }
`;