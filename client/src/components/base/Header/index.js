import React from 'react';
import * as S from "./style";
import UserLoginButton from "./LoginButton";
import UserButton from "./UserButton";

function Header() {
    return (
        <S.HeaderWrapper>
            <S.HeaderLayout>
                <S.HeaderLogo to='/'> SOOKTUBE </S.HeaderLogo>
                {localStorage.getItem('user')
                    ? <UserButton/>
                    : <UserLoginButton/>
                }
            </S.HeaderLayout>
        </S.HeaderWrapper>
    )
}

export default Header;