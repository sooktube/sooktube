import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TabsWrapper = styled.div`
   width: 100%;
   display: flex;
   margin-top: 1rem;
   margin-left: 2rem;
`;

export const VideoTab = styled(Link)`
    display: inline-block;
    color: ${props => props.active === 1 ? '#71A6C6' : '#495057'};
    border-bottom: ${props => props.active === 1 ? '2.5px solid #71A6C6' : 'none'};
    transition: all 0.3s, transform 0.3s;
    margin-right: 0.5em;
    padding-bottom: 0.5em;
    font-size: 1.2rem;
    font-weight: bold;
    &:hover {
      color: #495057;
      text-decoration: none;
    }
`;


