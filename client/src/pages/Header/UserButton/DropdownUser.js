import React, {useEffect, useRef, useState} from 'react';
import {ArrowDown, DropdownUserBtn, UserDropdownContent, UserDropdownMenu, StyledLink, DropdownItem, UserIcon} from './style';
import useDropdownOutsideClick from "../../../components/useDropdownOutsideClick";
import {userService} from "../../../services";

function DropdownUser({username}) {
    const [userDropdownVisible, setUserDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setUserDropdownVisible(!userDropdownVisible);
    };

    const contentRef = useRef(null);
    useDropdownOutsideClick(contentRef, setUserDropdownVisible);


    return (
        <>
            <UserDropdownMenu>
                <DropdownUserBtn onClick={toggleDropdown}>
                    <UserIcon/> <ArrowDown/>
                </DropdownUserBtn>
                {userDropdownVisible &&
                    <UserDropdownContent ref={contentRef}>
                        <DropdownItem> 로그인한 계정: {username}님 </DropdownItem>
                        <StyledLink to="/login"> 로그아웃 </StyledLink>
                    </UserDropdownContent>
                }
            </UserDropdownMenu>
        </>
    )
}

export default DropdownUser
