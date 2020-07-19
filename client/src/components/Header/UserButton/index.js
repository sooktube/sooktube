import React, {useEffect, useState} from 'react';
import {UserButtonWrapper} from './style';
import DropdownUser from "./DropdownUser";
import DropdownCreate from "./DropdownCreate";
import {userService} from "../../../services";
import {useSelector} from "react-redux";

function UserButton() {
    const username = useSelector(state => state.authentication.username);

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