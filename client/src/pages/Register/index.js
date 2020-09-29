import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../../actions';
import {authService} from "../../services";
import * as S from "./style";
import EmailValidator from 'email-validator';

function Register() {
    const [user, setUser] = useState({
        userID: '',
        username: '',
        password: '',
        passwordChk: '',
        profilepic: 'defaultProfile.jpeg',
        profileUploadURL: null
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

    let userImage = null;
    const [imageURL, setImageURL] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();
    const registering = useSelector(state => state.registration.registering);

    useEffect(() => {
        authService.logout();
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function checkDuplicateUserID() {
        if (validate.userID === true){
            authService.checkUserID(user)
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
            authService.checkUsername(user)
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
        console.log(user);
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

        const userSubmit = { userID: user.userID, username: user.username, password: user.password, profilepic: user.profilepic };
        if ((validate.username && validate.userID && validate.password)
            && (user.password === user.passwordChk)
            && (!isDuplicate.username && !isDuplicate.userID)){
            dispatch(authAction.register(userSubmit));
        }
    }

    function fileSelect(event){
        const time = new Date().getTime().toString();
        const imageFile = event.target.files[0];
        const filename = 'profile' + time + event.target.files[0].name;
        setUser({...user, profilepic : filename });
        authService.getProfilePicUploadUrl(filename)
            .then(response => {
                authService.UploadUserProfilePic({
                    uploadURL : response,
                    imageFile : imageFile
                }).then(() => {
                    authService.getProfileUrlByProfilepic(filename)
                        .then(response => {
                            userImage = response;
                            setImageURL(userImage);
                        })
                })
            })
    }


    return (
        <S.MainBackground>
            <S.RegisterForm className="register">
                <form name="form" onSubmit={handleSubmit}>
                    <S.RegisterLogo> SOOKTUBE </S.RegisterLogo>
                    <S.LabelBox>
                        <S.Label img={imageURL} >
                            <S.UploadInput type="file" onChange={fileSelect}/>
                        </S.Label>
                        <S.AddText>Add Profile Photo</S.AddText>
                    </S.LabelBox>
                    <S.FormGroupA>
                        <S.LabelName> Email </S.LabelName>
                        <S.InputR type="text"
                                  name="userID"
                                  id="ruserID"
                                  value={user.userID}
                                  onChange={validateUserID}
                                  onBlur={checkDuplicateUserID}
                                  className={'form-control' + ((submitted && !user.userID) ||
                                  (user.userID && (!validate.userID || isDuplicate.userID)) ? ' is-invalid' : '')}/>
                        {(submitted && !user.userID) &&
                        <S.InvalidFeedback> 필수 정보입니다. </S.InvalidFeedback>
                        }
                        {validate.userID === false &&
                        <S.InvalidFeedback> 올바른 이메일 형식으로 입력해주세요. </S.InvalidFeedback>
                        }
                        {isDuplicate.userID === true &&
                        <S.InvalidFeedback> 사용 중인 이메일입니다. </S.InvalidFeedback>
                        }
                    </S.FormGroupA>
                    <S.FormGroupB>
                        <S.LabelName> Nickname </S.LabelName>
                        <S.LabelName2> 다른 유저와 중복되지 않는 별명으로 입력해주세요. (2자 ~ 10자) </S.LabelName2>
                        <S.InputR
                            type="text"
                            name="username"
                            id="rusername"
                            value={user.username}
                            onChange={validateUsername}
                            onBlur={checkDuplicateUsername}
                            className={'form-control' + ((submitted && !user.username) ||
                            (user.username && (!validate.username || isDuplicate.username)) ? ' is-invalid' : '')}/>
                        {submitted && !user.username &&
                        <S.InvalidFeedback>필수 정보입니다.</S.InvalidFeedback>
                        }
                        {validate.username === false &&
                        <S.InvalidFeedback> 2자에서 16자 사이로 입력해주세요. </S.InvalidFeedback>
                        }
                        {isDuplicate.username === true &&
                        <S.InvalidFeedback> 사용 중인 별명입니다. </S.InvalidFeedback>
                        }
                    </S.FormGroupB>
                    <S.FormGroupC>
                        <S.LabelName>Password</S.LabelName>
                        <S.LabelName2> 8자 이상 입력해주세요. </S.LabelName2>
                        <S.InputR type="password"
                                  name="password"
                                  id="rpassword"
                                  value={user.password}
                                  onChange={validatePassword}
                                  className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')}/>
                        {submitted && !user.password &&
                        <S.InvalidFeedback>필수 정보입니다.</S.InvalidFeedback>
                        }
                        {validate.password === false &&
                        <S.InvalidFeedback> 8자 이상 입력해주세요. </S.InvalidFeedback>
                        }
                    </S.FormGroupC>
                    <S.FormGroupD>
                        <S.LabelName>Re Enter the Password</S.LabelName>
                        <S.InputR type="password"
                                  name="passwordChk"
                                  id="rpassword"
                                  value={user.passwordChk}
                                  onChange={handleChange}
                                  className={'form-control' + (submitted && !user.passwordChk ? ' is-invalid' : '')}/>
                        {submitted && !user.passwordChk &&
                        <S.InvalidFeedback>필수 정보입니다. </S.InvalidFeedback>
                        }
                        {submitted && (user.passwordChk !== user.password) &&
                        <S.InvalidFeedback> 입력된 비밀번호와 다릅니다. </S.InvalidFeedback>
                        }
                    </S.FormGroupD>
                    <S.FormGroupE>
                        <S.Rsubmit>
                            SIGN UP
                            {registering && <span className="spinner-border spinner-border-sm mr-1" style={{margin: '0 0 0 5px'}}/>}
                        </S.Rsubmit>
                    </S.FormGroupE>
                </form>
            </S.RegisterForm>
        </S.MainBackground>
    );
}

export default Register;