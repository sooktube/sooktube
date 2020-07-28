import React, {useState} from 'react';
import { LoginButtonWrapper, LoginButton, RegisterButton, StyledLink } from "./style";
import Modal from "../../common/Modal";
import Login from "../../../pages/Login";

function UserLoginButton() {
    const [loginModalVisible, setLoginModalVisible] = useState(false);

    const openLoginModal = () => {
        setLoginModalVisible(true)
    };
    const closeLoginModal = () => {
        setLoginModalVisible(false)
    };

    return (
        <LoginButtonWrapper>
            <LoginButton onClick={openLoginModal}> Login </LoginButton>
            <span> | </span>
            <RegisterButton> <StyledLink to='/Register'> Sign up </StyledLink> </RegisterButton>
            {loginModalVisible &&
            <Modal visible={loginModalVisible}
                   onClose={closeLoginModal}>
                <Login/>
            </Modal>
            }
        </LoginButtonWrapper>
    )
}

export default UserLoginButton;