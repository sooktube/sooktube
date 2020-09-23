import { authConstants } from '../constants';

let user = localStorage.getItem('user');
let username  = localStorage.getItem('username');
let profile = localStorage.getItem('profile');

const initialState = user ? { loggedIn: true, user, username, profile } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
        username: action.username,
        profile: action.profile
      };
    case authConstants.LOGIN_FAILURE:
      return {};
    case authConstants.LOGOUT:
      return {};
    default:
      return state
  }
}