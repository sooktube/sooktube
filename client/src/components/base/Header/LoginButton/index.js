import React, {useState} from 'react';
import { LoginButtonWrapper, LoginButton, RegisterButton, StyledLink } from "./style";
import Modal from "../../../common/Modal/Modal";
import Login from "../../../../pages/Login";

function UserLoginButton() {
    const [modalVisible, setModalVisible] = useState(false);

    const openLoginModal = () => {
        setModalVisible(true)
    };
    const closeLoginModal = () => {
        setModalVisible(false)
    };

    return (
        <LoginButtonWrapper>
            <LoginButton onClick={openLoginModal}> Login </LoginButton>
            <span> | </span>
            <RegisterButton> <StyledLink to='/register'> Sign up </StyledLink> </RegisterButton>
            {modalVisible &&
            <Modal visible={modalVisible}
                   onClose={closeLoginModal}
                   width="420px">
                <Login/>
            </Modal>
            }
        </LoginButtonWrapper>
    )
}

export default UserLoginButton;