import React, {useRef, useState} from 'react';
import {ArrowDown, DropdownBtn, UserDropdownContent, UserDropdownMenu, StyledLink, UserIcon} from './style';
import useDropdownOutsideClick from "../../../components/useDropdownOutsideClick";

function DropdownUser() {
    const [userDropdownVisible, setUserDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setUserDropdownVisible(!userDropdownVisible);
    };

    const contentRef = useRef(null);
    useDropdownOutsideClick(contentRef, setUserDropdownVisible);

    return (
        <>
            <UserDropdownMenu>
                <DropdownBtn onClick={toggleDropdown}>
                    <UserIcon/> <ArrowDown/>
                </DropdownBtn>
                {userDropdownVisible &&
                    <UserDropdownContent ref={contentRef}>
                        <StyledLink to="/login"> 계정 </StyledLink>
                        <StyledLink to="/login"> 로그아웃 </StyledLink>
                    </UserDropdownContent>
                }
            </UserDropdownMenu>
        </>
    )
}

export default DropdownUser
