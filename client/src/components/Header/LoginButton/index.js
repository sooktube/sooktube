import React from 'react';
import { LoginButtonWrapper, LoginButton, RegisterButton, StyledLink } from "./style";

function UserLoginButton() {
    return (
        <LoginButtonWrapper>
            <LoginButton> <StyledLink to='/login'> Login </StyledLink> </LoginButton>
            <span> | </span>
            <RegisterButton> <StyledLink to='/Register'> Sign up </StyledLink> </RegisterButton>
        </LoginButtonWrapper>
    )
}

export default UserLoginButton;