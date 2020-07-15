import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../actions';
import {LoginLogo, FormGroup1, FormGroup2, FormGroup3, InvalidFeedback, SubmitButton, Regbutton, Regguide, InputA} from "./style";
import styled from 'styled-components';


function Login() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
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
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    return (
        <div className="login">
            <LoginLogo> SOOKTUBE </LoginLogo> 
            <form name="form" onSubmit={handleSubmit}>
                <FormGroup1>
                    <InputA type="text" placeholder="아이디" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')}/>
                    {submitted && !username &&
                    <InvalidFeedback>아이디를 입력해주세요</InvalidFeedback>
                    }
                </FormGroup1>
                <FormGroup2>
                    <InputA type="password" placeholder="비밀번호" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                    <div className="invalid-feedback">비밀번호를 입력해주세요</div>
                    }
                </FormGroup2>
                <FormGroup3>
                    <SubmitButton className="btn btn-primary">
                        로그인
                        {loggingIn && <span  className="spinner-border spinner-border-sm mr-1" style={{margin: '0 0 0 5px'}}/>}
                    </SubmitButton>
                    </FormGroup3>
                <Regguide>아직 회원이 아니세요? </Regguide>
                <Link to="/register"><Regbutton>회원가입</Regbutton></Link>
                
            </form>
        </div>
    );
}

export default Login;