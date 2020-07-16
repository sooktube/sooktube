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
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownBtn>
                        <UserIcon /> <ArrowDown/>
                    </DropdownBtn>
                    <DropdownContent>
                        <StyledLink to="/login"> 로그아웃 </StyledLink>
                    </DropdownContent>
                </DropdownMenu>

            </UsernameWrapper>
        </>
    )
}

export default UserButton;