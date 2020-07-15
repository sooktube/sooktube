import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Register.scss';
import { userActions } from '../../actions';
import { userService } from "../../services";
import EmailValidator from 'email-validator';

function Register() {
    const [user, setUser] = useState({
        userID: '',
        username: '',
        password: '',
        passwordChk: ''
    });

    const [validate, setValidate] = useState({
        userID: '',
        username: '',
        password: '',
        passwordChk: ''
    });

    const [isDuplicate, setIsDuplicate] = useState({
        userID: '',
        username: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();
    const registering = useSelector(state => state.registration.registering);

    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function checkDuplicateUserID() {
        if (validate.userID === true){
            userService.checkUserID(user)
                .then(response => {
                        if (response.data === "OK") setIsDuplicate(isDuplicate => ({...isDuplicate, userID: false}));
                        else setIsDuplicate(isDuplicate => ({...isDuplicate, userID: true}));
                    },
                    error => {
                        setIsDuplicate(isDuplicate => ({...isDuplicate, userID: true}));
                    }
                );
        }
    }

    function checkDuplicateUsername() {
        if (validate.username === true){
            userService.checkUsername(user)
                .then(response => {
                        if (response.data === "OK") setIsDuplicate(isDuplicate => ({...isDuplicate, username: false}));
                        else setIsDuplicate(isDuplicate => ({...isDuplicate, username: true}));
                    },
                    error => {
                        setIsDuplicate(isDuplicate => ({...isDuplicate, username: true}));
                    }
                );
        }
    }

    function validateUserID(e) {
        const { name, value } = e.target;
        setIsDuplicate(isDuplicate => ({...isDuplicate, [name]: false}));
        setUser(user => ({...user, [name]: value}));
        if (EmailValidator.validate(value)){
            setValidate(validate => ({...validate, userID: true}));
        }
        else setValidate({...validate, userID: false});
    }

    function validateUsername(e) {
        const { name, value } = e.target;
        setIsDuplicate(isDuplicate => ({...isDuplicate, [name]: false}));
        setUser(user => ({...user, [name]: value}));
        if (value.length > 1 && value.length < 17){
            setValidate(validate => ({...validate, username: true}));
        }
        else setValidate({...validate, username: false});
    }

    function validatePassword(e) {
        const { name, value } = e.target;
        setIsDuplicate(isDuplicate => ({...isDuplicate, [name]: false}));
        setUser(user => ({...user, [name]: value}));
        if (value.length > 7){
            setValidate(validate => ({...validate, password: true}));
        }
        else setValidate({...validate, password: false});
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);

        const userSubmit = { userID: user.userID, username: user.username, password: user.password };
        if ((validate.username && validate.userID && validate.password)
            && (user.password === user.passwordChk)
            && (!isDuplicate.username && !isDuplicate.userID)){
            dispatch(userActions.register(userSubmit));
        }
    }

    return (
        <div className="register">
            <form name="form" onSubmit={handleSubmit}>
                <h2> <p className="registerlogo"> SOOKTUBE </p> </h2>
                <div className="form-groupA">
                    <div className="label_name"> 이메일 </div>
                    <input type="text"
                           name="userID"
                           id="ruserID"
                           value={user.userID}
                           onChange={validateUserID}
                           onBlur={checkDuplicateUserID}
                           className={'form-control' + (validate.userID === false || isDuplicate.userID === true ? ' is-invalid' : '')}/>
                    {(submitted && !user.userID) &&
                    <div className="invalid_feedback">필수 정보입니다.</div>
                    }
                    {validate.userID === false &&
                    <div className="invalid_feedback"> 올바른 이메일 형식을 입력해주세요. </div>
                    }
                    {isDuplicate.userID === true &&
                    <div className="invalid_feedback"> 사용 중인 ID입니다. </div>
                    }
                </div>
                <div className="form-groupB">
                    <div className="label_name"> 별명 </div>
                    <div className="label_name"> 다른 유저와 중복되지 않는 별명으로 입력해주세요. (2자 ~ 16자) </div>
                    <input
                        type="text"
                        name="username"
                        id="rusername"
                        value={user.username}
                        onChange={validateUsername}
                        onBlur={checkDuplicateUsername}
                        className={'form-control' + (validate.username === false || isDuplicate.username === true? ' is-invalid' : '')}/>
                    {(submitted && !user.username) &&
                    <div className="invalid_feedback">필수 정보입니다.</div>
                    }
                    {validate.username === false &&
                    <div className="invalid_feedback"> 2자에서 16자 사이로 입력해주세요. </div>
                    }
                    {isDuplicate.username === true &&
                    <div className="invalid_feedback"> 사용 중인 별명입니다. </div>
                    }
                </div>
                <div className="form-groupC">
                    <div className="label_name">비밀번호</div>
                    <div> 8자 이상 입력해주세요. </div>
                    <input type="password"
                           name="password"
                           id="rpassword"
                           value={user.password}
                           onChange={validatePassword}
                           className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')}/>
                    {(submitted && !user.password) &&
                    <div className="invalid_feedback">필수 정보입니다.</div>
                    }
                    {validate.password === false &&
                    <div className="invalid_feedback"> 8자 이상 입력해주세요. </div>
                    }

                </div>
                <div className="form-groupD">
                    <div className="label_name">비밀번호 확인</div>
                    <input type="password"
                           name="passwordChk"
                           id="rpassword"
                           value={user.passwordChk}
                           onChange={handleChange}
                           className={'form-control' + (submitted && !user.passwordChk ? ' is-invalid' : '')}/>
                    {(submitted && !user.passwordChk) &&
                    <div className="invalid_feedback">필수 정보입니다.</div>
                    }
                    {(user.passwordChk !== user.password) &&
                    <div className="invalid_feedback"> 입력된 비밀번호와 다릅니다. </div>
                    }
                </div>
                <div className="form-groupE">
                    <button className="btn btn-primary" id="rsubmit">
                        가입하기
                        {registering && <span className="spinner-border spinner-border-sm mr-1" style={{margin: '0 0 0 5px'}}/>}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;