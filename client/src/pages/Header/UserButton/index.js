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
                    <DropdownContent>
                        <StyledLink to="/VideoPlayer"> 재생목록 만들기 </StyledLink>
                        <StyledLink to="/VideoUpload"> 영상 업로드 </StyledLink>
                    </DropdownContent>
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