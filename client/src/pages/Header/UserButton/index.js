import React, {useState, useEffect} from 'react';
import {userService} from "../../../services";

import {UserButtonWrapper} from './style';
import DropdownUser from "./DropdownUser";
import DropdownCreate from "./DropdownCreate";


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
            <UserButtonWrapper>
                <DropdownCreate/>
                <DropdownUser/>
            </UserButtonWrapper>
        </>
    )
}

export default UserButton;