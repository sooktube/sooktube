import styled from "styled-components";
import {Link} from "react-router-dom";

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