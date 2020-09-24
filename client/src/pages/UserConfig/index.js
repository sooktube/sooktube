import React, {useState, useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { authAction } from '../../actions';
import {authService} from "../../services";
import * as S from "./style";
import defaultImg from '../../../public/defaultProfile.png';
import Header from "../../components/base/Header";

function UserConfig() {
    const { username } = useParams();
    const [originalUsername, setOriginalUsername] = useState(null);
    const defaultProfilePic = "defaultProfile.jpeg";

    const [user, setUser] = useState({
        userID: '',
        username: '',
        password: '',
        passwordChk: '',
        profilepic: '',
        picpath: '',
        profileUploadURL: null
    });

    const [validate, setValidate] = useState({
        username: true,
        password: '',
        passwordChk: ''
    });

    const [isDuplicate, setIsDuplicate] = useState({
        username: false
    });

    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();
    const registering = useSelector(state => state.registration.registering);

    useEffect(() => {
        authService.getUserInfo(username)
            .then(response => {
                setUser({
                    ...user,
                    profilepic: response.profilepic,
                    picpath: response.picpath,
                    username,
                    userID: response.userID
                })
                setOriginalUsername(response.username);
            })
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function checkDuplicateUsername() {
        if (validate.username === true && originalUsername !== user.username){
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

        const userSubmit = {
            userID: user.userID,
            username: user.username,
            password: user.password,
            profilepic: user.profilepic
        };

        if (validate.username && validate.password
            && user.password === user.passwordChk
            && isDuplicate.username === false) {
            dispatch(authAction.updateUser(userSubmit));
        }
    }

    function fileSelect(event){
        const imageFile = event.target.files[0];
        const time = new Date().getTime().toString();
        const filename = 'profile' + time + event.target.files[0].name;

        authService.getProfilePicUploadUrl(filename)
            .then(response => {
                authService.UploadUserProfilePic({
                    uploadURL : response,
                    imageFile : imageFile
                }).then(() => {
                    authService.getProfileUrlByProfilepic(filename)
                        .then(response => {
                            setUser({
                                ...user,
                                picpath: response,
                                profilepic: filename
                            })
                        })
                })
            })
    }

    function handleDelete() {
        setUser({
            ...user,
            profilepic: 'defaultProfile.jpeg',
            picpath: defaultImg,
        })
    }

    return (
        <S.MainBackground>
            <Header/>
            {user.userID &&
            <S.RegisterForm className="register">
                <form name="form" onSubmit={handleSubmit}>
                    <S.LabelBox>
                        <S.Label img={user.picpath} >
                            <S.UploadInput type="file" onChange={fileSelect}/>
                        </S.Label>
                        <S.AddText>
                            Profile Photo
                            {user.profilepic !== defaultProfilePic &&
                                <S.DeleteButton onClick={handleDelete}/>
                            }
                        </S.AddText>
                    </S.LabelBox>
                    <S.FormGroupA>
                        <S.LabelName> Email </S.LabelName>
                        <S.InputR type="text"
                                  placeholder={user.userID}
                                  className='form-control'
                                  readOnly/>
                       </S.FormGroupA>
                    <S.FormGroupB>
                        <S.LabelName> Nickname </S.LabelName>
                        <S.LabelName2> 다른 유저와 중복되지 않는 별명으로 입력해주세요. (2자 ~ 10자) </S.LabelName2>
                        <S.InputR
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={validateUsername}
                            onBlur={checkDuplicateUsername}
                            className={'form-control' + ((submitted && !user.username)
                            || (user.username && (validate.username === false || isDuplicate.username))
                                ? ' is-invalid' : '')}/>
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
                            수정
                            {registering && <span className="spinner-border spinner-border-sm mr-1" style={{margin: '0 0 0 5px'}}/>}
                        </S.Rsubmit>
                    </S.FormGroupE>
                </form>
            </S.RegisterForm>
            }
        </S.MainBackground>
    );
}

export default UserConfig;