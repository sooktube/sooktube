import React, {useState} from 'react';
import { LoginButtonWrapper, LoginButton, RegisterButton, StyledLink } from "./style";
import Modal from "../../common/Modal";
import Login from "../../../pages/Login";
function UserLoginButton() {
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true)
    };
    const closeModal = () => {
        setModalVisible(false)
    };
    return (
        <LoginButtonWrapper>
            <LoginButton onClick={openModal}> Login </LoginButton>
            <span> | </span>
            <RegisterButton> <StyledLink to='/Register'> Sign up </StyledLink> </RegisterButton>
            {modalVisible &&
            <Modal visible={modalVisible}
                   onClose={closeModal}>
                <Login/>
            </Modal>
            }

        </LoginButtonWrapper>
    )
}

export default UserLoginButton;