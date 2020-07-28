import React, {useEffect, useRef, useState} from 'react';
import * as S from './style';
import useDropdownOutsideClick from "../../../../hooks/useDropdownOutsideClick";
import {userService} from "../../../../services";

function DropdownUser({username}) {
    const [userDropdownVisible, setUserDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setUserDropdownVisible(!userDropdownVisible);
    };

    const contentRef = useRef(null);
    useDropdownOutsideClick(contentRef, setUserDropdownVisible);

    return (
        <>
            <S.UserDropdownMenu>
                <S.DropdownUserBtn onClick={toggleDropdown}>
                    <S.UserIcon/> <S.ArrowDown/>
                </S.DropdownUserBtn>
                {userDropdownVisible &&
                    <S.UserDropdownContent ref={contentRef}>
                        <S.DropdownItem> 로그인한 계정: {username}님 </S.DropdownItem>
                        <S.DropdownButton onClick={userService.logout}> 로그아웃 </S.DropdownButton>
                    </S.UserDropdownContent>
                }
            </S.UserDropdownMenu>
        </>
    )
}

export default DropdownUser
