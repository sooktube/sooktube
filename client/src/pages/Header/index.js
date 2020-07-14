import React from 'react';
import { HeaderLogo, HeaderWrapper, HeaderLayout, LoginButtonWrapper, LoginButton, RegisterButton, StyledLink } from "./style";

function Header() {
    return (
        <HeaderWrapper>
            <HeaderLayout>
                <HeaderLogo> SOOKTUBE </HeaderLogo>
                <LoginButtonWrapper>
                    <LoginButton> <StyledLink to='/login'> 로그인 </StyledLink> </LoginButton>
                    <span> | </span>
                    <RegisterButton> <StyledLink to='/Register'> 회원가입 </StyledLink> </RegisterButton>
                </LoginButtonWrapper>
            </HeaderLayout>
        </HeaderWrapper>
    )
}

export default Header;