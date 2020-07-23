import styled from 'styled-components';
import {FaRegUserCircle, TiArrowSortedDown, FiPlus} from "react-icons/all";
import { NavLink } from 'react-router-dom';
import { MAIN } from "../../Style/Main";

export const UserButtonWrapper = styled.div`
    margin-right: 1vw;
    display: flex;
`;

export const Username = styled.div`
    color: ${MAIN.TEXT_COLOR};
    padding: 0.5em 0 0 0.2em;
`;

export const ArrowDown = styled(TiArrowSortedDown)`
    margin: 0.5em 0 0 0.1em;
    color: ${MAIN.MAIN_THEME_COLOR};
    &:hover {
        color: ${MAIN.DARK_ON_HOVER};
    }
`;

export const PlusMenu = styled(FiPlus)`
    margin-top: 0.5em;
    color: ${MAIN.MAIN_THEME_COLOR};
`;

export const UserIcon = styled(FaRegUserCircle)`
    height: 2em;
    width: 2em;
    margin: 0 0.2em 0 0;
    color: ${MAIN.MAIN_THEME_COLOR};
`;

export const UserDropdownContent = styled.div`
    position: absolute;
    background-color: #f9f9f9;
    min-width: 20vw;
    margin-top: 0.3em;
    right: 0; 
    border-radius: 2%;
    z-index: 200;
`;

export const CreateDropdownContent = styled.div`
    position: absolute;
    margin-top: 0.3em;
    background-color: #f9f9f9;
    right: 0;
    min-width: 20vw;
    border-radius: 2%;
    z-index: 200;
`;

export const UserDropdownMenu = styled.div`
    font-size: 3vh;
    float: right;
    position: relative;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
`;

export const CreateDropdownMenu = styled.div`
    margin-right: 1em;
    font-size: 3vh;
    float: right;
    position: relative;
    border: none;
    cursor: pointer;
`;

export const DropdownUserBtn  = styled.div`
    display: flex;
    top: 1vh;
    right: 1vw;
    height: 6vh;
`;

export const DropdownPlusBtn  = styled.div`
    display: flex;
    top: 1vh;
    color: white;
    height: 6vh;
`;

export const StyledLink = styled(NavLink)`
    color: ${MAIN.TEXT_COLOR};
    padding: 1em 0.5em 1em 0.5em;
    font-size: 2vh;
    font-weight:bold;
    text-decoration: none;
    display: block;
    background-color: #83bee0;
    &:hover {
        color: white;
        text-decoration: none;
        background-color: #94d1f4;
    }
`;

export const DropdownItem = styled.div`
    color: ${MAIN.TEXT_COLOR};
    padding: 1em 0.5em 1em 0.5em;
    font-size: 2vh;
    font-weight:bold;
    min-height: 2vh;
    text-decoration: none;
    display: block;
    background-color:#94d1f4;
    /*border-bottom: 0.1em solid ${MAIN.BORDER_COLOR}*/
`;