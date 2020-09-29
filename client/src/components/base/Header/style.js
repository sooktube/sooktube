import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { MAIN } from '../../style/Main';

export const HeaderWrapper = styled.div`
    height: 10vh;
    width: 100%;
    background-color: whitesmoke;
    display: flex;
    justify-content: space-between;
    padding: 2vh 0 0 0;
`;

export const HeaderLogo = styled(NavLink)`
    font-weight: bold;
    font-size: 24px;
    padding-top: 1vh;
    padding-bottom: 0.5em;
    letter-spacing: 0.2em;
    color: ${MAIN.BASE_COLOR};
    &:hover {
        text-decoration: none;
        color: ${MAIN.BASE_COLOR};
    }
`;


