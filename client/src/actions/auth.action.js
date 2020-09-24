import { authConstants } from '../constants';
import { authService } from '../services';
import { alertAction } from './';
import { history } from '../helpers';

export const authAction = {
    login,
    logout,
    register,
    updateUser
};

function login(user) {
    return dispatch => {
        let currentUsername = null;
        let token = null;
        dispatch(request());
        localStorage.clear();
        //nested Promise to get username
        authService.login(user)
            .then(response => {
                token = response;
                return authService.getUsername(response);
            })
            .then(username => {
                currentUsername = username;
                return authService.getUserProfilePic(username)
            })
            .then(profile => {
                dispatch(success({token, userID: user.userID, username: currentUsername, profileURL: profile}));
                history.push('/');
            })
            .catch(error => {
                dispatch(failure(error.toString()));
                dispatch(alertAction.error(error.toString()));
            })
    };

    function request() { return { type: authConstants.LOGIN_REQUEST } }
    function success({token, username, userID, profileURL}) { return { type: authConstants.LOGIN_SUCCESS, token, username, userID, profileURL } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

function logout() {
    authService.logout();
    return { type: authConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        authService.register(user).then(
                response => {
                    dispatch(success());
                    dispatch(alertAction.success('Registration successful'));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertAction.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: authConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: authConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: authConstants.REGISTER_FAILURE, error } }
}

function updateUser(user){
    return dispatch => {
        dispatch(request());
        let username = null, profile = null;
        authService.updateUserInfo(user)
            .then(response => {
                    localStorage.setItem('profile', response.profilepic);
                    localStorage.setItem('username', response.username);
                    username = response.username;
                    profile = response.profilepic;
                    return authService.getProfileUrlByProfilepic(response.profilepic)
                })
            .then(response => {
                dispatch(success({profileURL: response, username, profile}));
                history.push('/');
            })
            .catch(error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertAction.error(error.toString()));
                }
            );
    };

    function request() { return { type: authConstants.EDIT_REQUEST} }
    function success({profileURL, username, profile}) { return { type: authConstants.EDIT_SUCCESS, profileURL, username, profile } }
    function failure(error) { return { type: authConstants.EDIT_FAILURE, error } }
}