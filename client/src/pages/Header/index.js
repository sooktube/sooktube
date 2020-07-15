import React from 'react';
import { HeaderLogo, HeaderWrapper, HeaderLayout } from "./style";
import UserLoginButton from "./LoginButton";
import UserButton from "./UserButton";

function Header() {
    return (
        <HeaderWrapper>
            <HeaderLayout>
                <HeaderLogo> SOOKTUBE </HeaderLogo>
                {localStorage.getItem('user')
                    ? <UserButton/>
                    : <UserLoginButton/>
                }
            </HeaderLayout>
        </HeaderWrapper>
    )
}

export default Header;