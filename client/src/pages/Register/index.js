import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Register.scss';
import { userActions } from '../../actions';
import {userService} from "../../services";

function Register() {
    const [user, setUser] = useState({
        userID: '',
        username: '',
        password: '',
        passwordChk: ''
    });

    const [validate, setValidate] = useState({
        userID: '',
        username: ''
    });

    const [isDuplicate, setIsDuplicate] = useState({
        userID: '',
        username: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const registration = useSelector(state => state.registration);
    const dispatch = useDispatch();

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
                .then(
                    response => {
                        console.log(response);
                        if (response.data === "OK") setIsDuplicate({...validate, userID: false});
                        else setIsDuplicate({...validate, userID: true});
                    },
                    error => {
                        setIsDuplicate({...validate, userID: true});
                    }
                );
        }
    }

    function checkDuplicateUsername() {
        if (validate.username === true){
            userService.checkUsername(user)
                .then(
                    response => {
                        if (response.data === "OK") setIsDuplicate({...validate, username: false});
                        else setIsDuplicate({...validate, username: true});
                    },
                    error => {
                        setIsDuplicate({...validate, username: true});
                    }
                );
        }
    }

    function validateUserID(e) {
        const { name, value } = e.target;
        setIsDuplicate(isDuplicate => ({...isDuplicate, [name]: false}));
        setUser(user => ({...user, [name]: value}));
        if (value.length > 2 && value.length < 17){
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

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);

        const userSubmit = { userID: user.userID, username: user.username, password: user.password };

        if ((user.username && user.userID && user.password) && (user.password === user.passwordChk)) {
            dispatch(userActions.register(userSubmit));
        }
    }

    return (
        <div className="register">
            <form name="form" onSubmit={handleSubmit}>
                <h2> <p className="registerlogo"> SOOKTUBE </p> </h2>
                <div className="form-groupA">
                    <div className="label_name"> 아이디 </div>
                    <div> 3자에서 16자 사이로 입력해주세요. </div>
                    <input type="text"
                           name="userID"
                           id="ruserID"
                           value={user.userID}
                           onChange={validateUserID}
                           onBlur={checkDuplicateUserID}
                           className={'form-control' + (validate.userID === false || isDuplicate.userID === true ? ' is-invalid' : '')}/>
                    {validate.userID === false &&
                    <div className="invalid_feedback"> 3자에서 16자 사이로 입력해주세요. </div>
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
                    {submitted && !user.username &&
                    <div className="invalid_feedback">필수 정보입니다.</div>
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
                           onChange={handleChange}
                           className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')}/>
                    {submitted && !user.password &&
                    <div className="invalid_feedback">필수 정보입니다.</div>
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
                    {submitted && !user.passwordChk &&
                    <div className="invalid_feedback">필수 정보입니다.</div>
                    }
                    {submitted && (user.passwordChk !== user.password) &&
                    <div className="invalid_feedback"> 입력된 비밀번호와 다릅니다. </div>
                    }
                </div>
                <div className="form-groupE">
                    <button className="btn btn-primary" id="rsubmit">
                        가입하기
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;