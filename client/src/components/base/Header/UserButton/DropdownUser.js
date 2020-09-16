import React, {useRef, useState} from 'react';
import * as S from './style';
import useDropdownOutsideClick from "../../../../hooks/useDropdownOutsideClick";
import {userService} from "../../../../services";
import {history} from "../../../../helpers";

function DropdownUser({username}) {
    const [userDropdownVisible, setUserDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setUserDropdownVisible(!userDropdownVisible);
    };

    const contentRef = useRef(null);
    useDropdownOutsideClick(contentRef, setUserDropdownVisible);

    function handleClick() {
        userService.logout();
        history.push('/');
    }

    return (
        <>
            <S.UserDropdownMenu>
                <S.DropdownUserBtn onClick={toggleDropdown}>
                    <S.UserIcon/> <S.ArrowDown/>
                </S.DropdownUserBtn>
                {userDropdownVisible &&
                    <S.UserDropdownContent ref={contentRef}>
                        <S.DropdownItem> 로그인한 계정: {username}님 </S.DropdownItem>
                        <S.StyledLink to={`/@${username}/video`}> 마이페이지 </S.StyledLink>
                        <S.DropdownButton onClick={handleClick}> 로그아웃 </S.DropdownButton>
                    </S.UserDropdownContent>
                }
            </S.UserDropdownMenu>
        </>
    )
}

export default DropdownUser
