import styled from 'styled-components';
import {FaRegUserCircle, TiArrowSortedDown, FiPlus} from "react-icons/all";
import { NavLink } from 'react-router-dom';
import { MAIN } from "../../Style/Main";

export const UserButtonWrapper = styled.div`
    font-size: 3vh;
    margin-right: 1vw;
    display: flex;
`;

export const Username = styled.div`
    color: white;
    padding: 0.5em 0 0 0.2em;
`;

export const ArrowDown = styled(TiArrowSortedDown)`
    margin: 0.5em 0 0 0.1em;
    color: white;
    &:hover {
        color: ${MAIN.DARK_ON_CLICK};
    }
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

export const UserDropdownContent = styled.div`
    background-color: #f9f9f9;
    min-width: 10vw;
    margin: 0;
    border-radius: 5%;
    border: 0.15em solid #e3e3e3;
    z-index: 1;
`;

export const CreateDropdownContent = styled.div`
    background-color: #f9f9f9;
    min-width: 10vw;
    margin: 0;
    border-radius: 5%;
    border: 0.15em solid #e3e3e3;
    z-index: 1;
`;

export const UserDropdownMenu = styled.div`
    margin-right: 3vw;
    font-size: 3vh;
    border: none;
    margin: 0;
    float: right;
    padding: 0;
    cursor: pointer;
`;

export const CreateDropdownMenu = styled.div`
    margin-right: 1em;
    font-size: 3vh;
    border: none;
    float: right;
    padding: 0;
    cursor: pointer;
`;

export const DropdownBtn  = styled.div`
    display: flex;
    overflow: auto;
    top: 1vh;
    right: 1vw;
    border: 0;
    margin: 0;
    padding: 0;
`;

export const DropdownPlusBtn  = styled.div`
    display: flex;
    top: 1vh;
    border: 0;
    margin: 0;
    color: white;
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
        background-color: #e3e3e3;
    }
`;