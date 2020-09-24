import React, {useEffect, useRef, useState} from 'react';
import * as S from './style';
import useDropdownOutsideClick from "../../../../hooks/useDropdownOutsideClick";
import {authService} from "../../../../services";
import {history} from "../../../../helpers";
import {useSelector} from "react-redux";

function DropdownUser({username}) {
    const [userDropdownVisible, setUserDropdownVisible] = useState(false);
    const profile = useSelector(state => state.authentication.profileURL);

    const toggleDropdown = () => {
        setUserDropdownVisible(!userDropdownVisible);
    };

    const contentRef = useRef(null);
    useDropdownOutsideClick(contentRef, setUserDropdownVisible);

    function handleClick() {
        authService.logout();
        history.push('/');
    }

    return (
        <S.UserDropdownMenu>
            <S.DropdownUserBtn onClick={toggleDropdown}>
                <S.UserProfile src={profile} alt={`${username} profile`}/>
                <S.ArrowDown/>
            </S.DropdownUserBtn>
            {userDropdownVisible &&
            <S.UserDropdownContent ref={contentRef}>
                <S.DropdownItem> 로그인한 계정: {username}님 </S.DropdownItem>
                <S.StyledLink to={`/@${username}/profile/video`}> 마이페이지 </S.StyledLink>
                <S.StyledLink to={`/@${username}/config`}> 설정 </S.StyledLink>
                <S.DropdownButton onClick={handleClick}> 로그아웃 </S.DropdownButton>
            </S.UserDropdownContent>
            }
        </S.UserDropdownMenu>
    )
}

export default DropdownUser
