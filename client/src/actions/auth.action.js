import { authConstants } from '../constants';
import { authService } from '../services';
import { alertAction } from './';
import { history } from '../helpers';

export const authAction = {
    login,
    logout,
    register
};

function login(user) {
    return dispatch => {
        dispatch(request({ user }));
        localStorage.clear();
        //nested Promise to get username
        authService.login(user).then(
                user => { authService.getUsername().then(
                    username => {
                        dispatch(success({ user: user, username: username }));
                        history.push('/');
                    })
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertAction.error(error.toString()));
                }
            )
    };

    function request(user) { return { type: authConstants.LOGIN_REQUEST, user } }
    function success({user, username}) { return { type: authConstants.LOGIN_SUCCESS, user, username } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

function logout() {
    authService.logout();
    return { type: authConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        authService.register(user)
            .then(
                user => {
                    dispatch(success());
                    dispatch(alertAction.success('Registration successful'));
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
