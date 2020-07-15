import React, {useState, useEffect} from 'react';
import {userService} from "../../../services";

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
            <div> {username} </div>
        </>
    )
}

export default UserButton;