import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillClockCircle, IoIosHeart } from "react-icons/all";

export const TabsWrapper = styled.div`
   width: 100%;
   display: flex;
   margin-top: 2rem;
   margin-left: 2rem;
`;

export const MainTab = styled(Link)`
    color: ${props => props.active === 1 ? '#71A6C6' : '#495057'};
    border-bottom: ${props => props.active === 1 ? '2.5px solid #71A6C6' : 'none'};
    transition: all 0.3s, transform 0.1s;
    margin-right: 0.5em;
    padding-bottom: 0.5em;
    font-size: 16px;
    width: 100px;
    text-align: center;
    font-weight: bold;
    &:hover {
      color: #71A6C6;
      text-decoration: none;
    }
`;

export const Heart = styled(IoIosHeart)`
    color: ${props => props.active === 1 ? '#71A6C6' : '#d3d3d9'}; 
    transition: 0.3s;
    margin-right: 1em;
`;

export const Clock = styled(AiFillClockCircle)`
    color: ${props => props.active === 1 ? '#71A6C6' : '#d3d3d9'}; 
    margin-right: 1em;
    transition: 0.3s;
`;