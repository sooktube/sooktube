import styled from "styled-components";
import {Link} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { MAIN } from "../../../pages/Style/Main";

export const LoginButtonWrapper = styled.div`
    margin: 0;
    padding: 1em 1em 0 0;
    color: ${MAIN.TEXT_COLOR};
`;

export const LoginButton = styled.span`
    font-size: 2.5vh;
    margin: 0 1em 0 0;
    padding: 0 0 0.2em 0;
`;

export const RegisterButton = styled.span`
    margin: 0 0 0 1em;
    font-size: 2.5vh;
`;

export const StyledLink = styled(Link)`
    color: ${MAIN.TEXT_COLOR};
    &:hover {
        text-decoration: none;
        color: white;
    }
`;