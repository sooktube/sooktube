import React, {useEffect, useState} from 'react';
import {UserButtonWrapper} from './style';
import DropdownUser from "./DropdownUser";
import DropdownCreate from "./DropdownCreate";
import {userService} from "../../../services";

function UserButton() {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        userService.getUsername()
            .then(data => {
                setUsername(data);
            })
    }, []);
    console.log(username);
    return (
        <>
            <UserButtonWrapper>
                <DropdownCreate/>
                <DropdownUser username={username}/>
            </UserButtonWrapper>
        </>
    )
}

export default UserButton;