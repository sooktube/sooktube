import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../actions';
import {userService} from "../../services";
import {RegisterLogo, InputR, LabelName,LabelName2, FormGroupA, FormGroupB, FormGroupC,FormGroupD, FormGroupE, Rsubmit,InvalidFeedback, RegisterForm} from "./style";
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
        <RegisterForm className="register">
            <form name="form" onSubmit={handleSubmit}>
                <RegisterLogo> SOOKTUBE </RegisterLogo> 
                <FormGroupA>
                    <LabelName> 이메일 </LabelName>
                    <InputR type="text"
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
                    <InvalidFeedback> 올바른 이메일 형식으로 입력해주세요. </InvalidFeedback>
                    }
                    {isDuplicate.userID === true &&
                    <InvalidFeedback> 사용 중인 ID입니다. </InvalidFeedback>
                    }
                </FormGroupA>
                <FormGroupB>
                    <LabelName> 별명 </LabelName>
                    <LabelName2> 다른 유저와 중복되지 않는 별명으로 입력해주세요. (2자 ~ 16자) </LabelName2>
                    <InputR
                        type="text"
                        name="username"
                        id="rusername"
                        value={user.username}
                        onChange={validateUsername}
                        onBlur={checkDuplicateUsername}
                        className={'form-control' + (validate.username === false || isDuplicate.username === true? ' is-invalid' : '')}/>
                    {submitted && !user.username &&
                    <InvalidFeedback>필수 정보입니다.</InvalidFeedback>
                    }
                    {validate.username === false &&
                    <div className="invalid_feedback"> 2자에서 16자 사이로 입력해주세요. </div>
                    }
                    {isDuplicate.username === true &&
                    <InvalidFeedback> 사용 중인 별명입니다. </InvalidFeedback>
                    }
                </FormGroupB>
                <FormGroupC>
                    <LabelName>비밀번호</LabelName>
                    <LabelName2> 8자 이상 입력해주세요. </LabelName2>
                    <InputR type="password"
                           name="password"
                           id="rpassword"
                           value={user.password}
                           onChange={validatePassword}
                           className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')}/>
                    {submitted && !user.password &&
                    <InvalidFeedback>필수 정보입니다.</InvalidFeedback>
                    }
                    {validate.password === false &&
                    <div className="invalid_feedback"> 8자 이상 입력해주세요. </div>
                    }
                </FormGroupC>
                <FormGroupD>
                    <LabelName>비밀번호 확인</LabelName>
                    <InputR type="password"
                           name="passwordChk"
                           id="rpassword"
                           value={user.passwordChk}
                           onChange={handleChange}
                           className={'form-control' + (submitted && !user.passwordChk ? ' is-invalid' : '')}/>
                    {submitted && !user.passwordChk &&
                    <InvalidFeedback>필수 정보입니다. </InvalidFeedback>
                    }
                    {submitted && (user.passwordChk !== user.password) &&
                    <InvalidFeedback> 입력된 비밀번호와 다릅니다. </InvalidFeedback>
                    }
                </FormGroupD>
                <FormGroupE>
                    <Rsubmit className="btn btn-primary">
                        가입하기
                        {registering && <span className="spinner-border spinner-border-sm mr-1" style={{margin: '0 0 0 5px'}}/>}
                    </Rsubmit>
                </FormGroupE>
            </form>
        </RegisterForm>
    );
}

export default Register;