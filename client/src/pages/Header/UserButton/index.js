import React, {useState, useEffect} from 'react';
import {userService} from "../../../services";

import {
    Username,
    UsernameWrapper,
    UserIcon,
    StyledLink,
    DropdownBtn,
    DropdownContent,
    DropdownMenu,
    ArrowDown,
    PlusMenu,
    DropdownPlus
} from './style';
import DropdownUser from "./DropdownUser";


function UserButton() {
    const [username, setUsername] = useState(null);
    useEffect(() => {
        userService.getUsername()
            .then(data => {
                setUsername(data);
            })
    }, []);
    return (
        <>
            <UsernameWrapper>
                <DropdownMenu>
                    <DropdownPlus>
                        <PlusMenu/> <ArrowDown/>
                    </DropdownPlus>
                    <DropdownContent>
                        <StyledLink to="/login"> 재생목록 만들기 </StyledLink>
                        <StyledLink to="/login"> 영상 만들기 </StyledLink>
                    </DropdownContent>
                </DropdownMenu>
                <DropdownUser/>
            </UsernameWrapper>
        </>
    )
}

export default UserButton;