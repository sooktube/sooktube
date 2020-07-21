import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { MAIN } from '../../pages/Style/Main';

export const HeaderWrapper = styled.div`
    width: 100vw;
    height: 12vh;
    padding: 0;
    margin: 0;
    background-color: ${MAIN.DARK_UI_COLOR};
`;

export const HeaderLayout = styled.div`
    display: flex; 
    justify-content: space-between;
    margin: 0 3vw 0 3vw;
    padding: 3vh 0 0 0;
`;
export const HeaderLogo = styled(NavLink)`
    position: relative;
    font-weight: bold;
    font-size: 5vh;
    padding-bottom: 0.5em;
    letter-spacing: 0.2em;
    color: white;
    width: 40vw;
    &:hover {
        text-decoration: none;
        color: white;
    }
`;


