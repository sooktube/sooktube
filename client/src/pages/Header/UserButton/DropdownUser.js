import React, {useState} from 'react';
import {ArrowDown, DropdownBtn, DropdownContent, DropdownMenu, StyledLink, UserIcon} from './style';

function DropdownUser() {
    const [userDropdownVisible, setUserDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setUserDropdownVisible(!userDropdownVisible);
    };
    return (
        <>
            <DropdownMenu>
                <DropdownBtn onClick={toggleDropdown}>
                    <UserIcon/> <ArrowDown/>
                </DropdownBtn>
                {userDropdownVisible &&
                    <DropdownContent>
                        <StyledLink to="/login"> 계정 </StyledLink>
                        <StyledLink to="/login"> 로그아웃 </StyledLink>
                    </DropdownContent>
                }
            </DropdownMenu>
        </>
    )
}

export default DropdownUser
