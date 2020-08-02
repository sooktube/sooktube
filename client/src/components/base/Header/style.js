import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { MAIN } from '../../style/Main';

export const HeaderWrapper = styled.div`
    height: 10vh;
    width: 100%;
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-between;
    padding: 2vh 0 0 0;
`;

export const HeaderLogo = styled(NavLink)`
    font-weight: bold;
    font-size: 4vh;
    padding-top: 1vh;
    padding-bottom: 0.5em;
    letter-spacing: 0.2em;
    color: ${MAIN.MAIN_THEME_COLOR};
    &:hover {
        text-decoration: none;
        color: ${MAIN.MAIN_THEME_COLOR};
    }
`;


