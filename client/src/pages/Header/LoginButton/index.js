import React from 'react';
import { LoginButtonWrapper, LoginButton, RegisterButton, StyledLink } from "./style";

function UserLoginButton() {
    return (
        <LoginButtonWrapper>
            <LoginButton> <StyledLink to='/login'> 로그인 </StyledLink> </LoginButton>
            <span> | </span>
            <RegisterButton> <StyledLink to='/Register'> 회원가입 </StyledLink> </RegisterButton>
        </LoginButtonWrapper>
    )
}

export default UserLoginButton;