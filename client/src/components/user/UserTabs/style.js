import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    margin: 2.4rem auto 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    max-width: 100%;
    border-bottom: 1.3px solid darken(#f4f4f4, 10);
    transition: all 0.3s ease;
`;

export const Tab = styled(Link)`
    position: relative;
    overflow: hidden;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    width: calc(100% / 4);
    height: auto;
    padding: 1rem 0;
    background: #fff;
    transition: all 0.3s ease;
    border-radius: 15px 15px 0 0;
    bottom: ${props => props.active === 1 && 0};
    z-index: ${props => props.active === 1 && 0};
    border-bottom: ${props => props.active === 1 ? '2.5px solid #71A6C6' : '2.5px solid transparent'};
    color:  ${props => props.active === 1 ? '#252b46' : '#9194a1'};    
    
    &:focus {
        outline:none;
        text-decoration: none;
    }
    
    &:hover {
        outline:none;
        text-decoration: none;
        color: #252b46;
    }
    
    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      z-index: 2;
    }
`;