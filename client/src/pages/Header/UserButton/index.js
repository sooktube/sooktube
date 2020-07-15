import React, {useState, useEffect} from 'react';
import {userService} from "../../../services";
import {Username, UsernameWrapper, UserIcon} from './style';
import icon from '../../../../public/userIcon.png';

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
                <UserIcon src={icon} alt="user_icon"/> <Username> {username} </Username>
            </UsernameWrapper>
        </>
    )
}

export default UserButton;