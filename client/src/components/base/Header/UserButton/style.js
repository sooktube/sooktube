import styled from 'styled-components';
import {FaRegUserCircle, TiArrowSortedDown, FiPlus} from "react-icons/all";
import { NavLink } from 'react-router-dom';
import { MAIN } from "../../../style/Main";

export const UserButtonWrapper = styled.div`
    display: flex;
`;

export const ArrowDown = styled(TiArrowSortedDown)`
    margin: 0.5em 0 0 0.1em;
    color: ${MAIN.BASE_COLOR};
    &:hover {
        color: ${MAIN.DARK_ON_HOVER};
    }
`;

export const PlusMenu = styled(FiPlus)`
    padding-top: 7px;
    height: 28px;
    width: 28px;
    color: ${MAIN.BASE_COLOR};
`;

export const UserProfile = styled.img`
    height: 36px;
    width: 36px;
    margin: 0 0.2em 0 0;
    border-radius: 50%;
    color: ${MAIN.BASE_COLOR};
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
    font-size: 14px;
    float: right;
    position: relative;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
`;

export const CreateDropdownMenu = styled.div`
    margin-right: 1em;
    font-size: 14px;
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
    font-size: 12px;
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
    font-size: 12px;
    font-weight:bold;
    min-height: 2vh;
    text-decoration: none;
    display: block;
    background-color:#94d1f4;
    /*border-bottom: 0.1em solid ${MAIN.BORDER_COLOR}*/
`;

export const DropdownButton = styled.div`
    color: ${MAIN.TEXT_COLOR};
    padding: 1em 0.5em 1em 0.5em;
    font-size: 2vh;
    font-weight:bold;
    min-height: 2vh;
    text-decoration: none;
    display: block;
    background-color: #83bee0;
    &:hover {
        color: white;
        text-decoration: none;
        background-color: #94d1f4;
    }
`;