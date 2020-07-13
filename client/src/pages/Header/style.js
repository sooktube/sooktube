import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.div`
    width: 100vw;
    padding: 0;
    margin: 0;
`;

export const HeaderLayout = styled.div`
    display: flex; 
    justify-content: space-between;
    margin: 0 3vw 0 3vw;
    padding: 5vh 0 0 0;
`;
export const HeaderLogo = styled.div`
    position: relative;
    font-weight: bold;
    font-size: 5vh;
    padding-bottom: 0.5em;
    letter-spacing: 0.2em;
    color: white;
    width: 40vw;
    border-bottom: solid 0.2em white;
`;

export const LoginButtonWrapper = styled.div`
    margin: 0;
    padding: 1em 1em 0 0;
    color: white;
`;

export const LoginButton = styled.span`
    font-size: 2.5vh;
    margin: 0 0.5em 0 0;
    padding: 0 0 0.2em 0;
`;

export const RegisterButton = styled.span`
    margin: 0 0 0 0.5em;
    font-size: 2.5vh;
`;

export const StyledLink = styled(Link)`
    color: white;
    &:hover {
        text-decoration: none;
        color: white;
    }
`;


