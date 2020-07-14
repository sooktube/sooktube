import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const userActions = {
    login,
    logout,
    register,
    checkUsername,
    checkUserID
};

function login(user) {
    return dispatch => {
        dispatch(request({ user }));

        userService.login(user)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function checkUserID(user) {
    return dispatch => {
        dispatch(request({ user }));

        userService.checkUserID(user)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };
    function request(user) { return { type: userConstants.CHECK_USERID_REQUEST, user } }
    function success(user) { return { type: userConstants.CHECK_USERID_SUCCESS, user } }
    function failure(error) { return { type: userConstants.CHECK_USERID_FAILURE, error } }
}

function checkUsername(user) {
    return dispatch => {
        dispatch(request({ user }));
        console.log(user);
        userService.checkUsername(user)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };
    function request(user) { return { type: userConstants.CHECK_USERNAME_REQUEST, user } }
    function success(user) { return { type: userConstants.CHECK_USERID_SUCCESS, user } }
    function failure(error) { return { type: userConstants.CHECK_USERID_FAILURE, error } }
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    console.log(user);
                    dispatch(success());
                    history.push('/user/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
