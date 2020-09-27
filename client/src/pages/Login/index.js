import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../../actions';
import {LoginLogo, MainBackground, RegLink, FormGroup1, FormGroup4, LoginBox, FormGroup2, FormGroup3, InvalidFeedback, SubmitButton, Regbutton, Regguide, InputA} from "./style";

function Login() {
    const [inputs, setInputs] = useState({
        userID: '',
        password: ''
    });

    const { userID, password } = inputs;
    const [submitted, setSubmitted] = useState(false);
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(authAction.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (userID && password) {
            dispatch(authAction.login({userID, password}));
        }
    }

    return (
        <MainBackground>
            <LoginBox>
            <LoginLogo> SOOKTUBE </LoginLogo> 
            <form name="form" onSubmit={handleSubmit}>
                <FormGroup1>
                    <InputA
                        placeholder="Email"
                        value={userID}
                        name="userID"
                        onChange={handleChange}
                        className={'form-control' + (submitted && !userID ? ' is-invalid' : '')}/>
                    {submitted && !userID &&
                    <InvalidFeedback>이메일을 입력해주세요</InvalidFeedback>
                    }
                </FormGroup1>
                <FormGroup2>
                    <InputA
                        placeholder="Password"
                        type="password"
                        value={password}
                        name="password"
                        onChange={handleChange}
                        className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                    <InvalidFeedback>비밀번호를 입력해주세요</InvalidFeedback>
                    }
                </FormGroup2>
                <FormGroup3>
                    <SubmitButton>
                        LOGIN
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"
                                            style={{
                                                margin: '0 0 2px 5px'
                                            }}/>}
                    </SubmitButton>
                </FormGroup3>
                <FormGroup4>
                <Regguide> 아직 회원이 아니신가요? </Regguide>
                <RegLink to="/register"> 회원가입 </RegLink>
                </FormGroup4>
            </form>
            </LoginBox>
        </MainBackground>
    );
}

export default Login;