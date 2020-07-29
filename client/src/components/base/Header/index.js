import React from 'react';
import * as S from "./style";
import UserLoginButton from "./LoginButton";
import UserButton from "./UserButton";

function Header() {
    return (
        <S.HeaderWrapper>
            <S.HeaderLogo to='/'> SOOKTUBE </S.HeaderLogo>
            {localStorage.getItem('user')
                ? <UserButton/>
                : <UserLoginButton/>
            }
        </S.HeaderWrapper>
    )
}

export default Header;