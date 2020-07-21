import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../actions';
import {LoginLogo, MainBackground, FormGroup1, FormGroup2, FormGroup3, InvalidFeedback, SubmitButton, Regbutton, Regguide, InputA} from "./style";

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
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (userID && password) {
            dispatch(userActions.login({userID, password}));
        }
    }
    console.log('a');
    return (
        <MainBackground>
            <LoginLogo> SOOKTUBE </LoginLogo> 
            <form name="form" onSubmit={handleSubmit}>
                <FormGroup1>
                    <InputA
                        placeholder="이메일"
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
                        placeholder="비밀번호"
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
                        로그인
                        {loggingIn && <span  className="spinner-border spinner-border-sm mr-1" style={{margin: '0 0 0 5px'}}/>}
                    </SubmitButton>
                    </FormGroup3>
                <Regguide>아직 회원이 아니세요? </Regguide>
                <Link to="/register"><Regbutton>회원가입</Regbutton></Link>
            </form>
        </MainBackground>
    );
}

export default Login;