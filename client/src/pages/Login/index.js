import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../actions';
import './Login.scss';

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
            <h2> <p className="loginlogo"> SOOKTUBE </p> </h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group1">
                    <input type="text" id="username" name="username" placeholder="아이디" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')}
                    />
                    {submitted && !username &&
                    <div className="invalid-feedback">아이디를 입력해주세요</div>
                    }
                </div>
                <div className="form-group2">
                    <input type="password" id="password" name="password" placeholder="비밀번호" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                    <div className="invalid-feedback">비밀번호를 입력해주세요</div>
                    }
                </div>
                <div className="form-group3">
                    <button className="btn btn-primary" id="submit">
                        로그인
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1" style={{margin: '0 0 0 5px'}}/>}
                    </button>
                    <div id="regguide"> 아직 회원이 아니세요? </div>
                    <Link to="/register" className="btn btn-link" id="regbutton">회원가입</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;