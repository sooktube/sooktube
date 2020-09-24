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
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.token,
        username: action.username,
        profileURL: action.profileURL,
        userID: action.userID,
      };
    case authConstants.LOGIN_FAILURE:
      return {};
    case authConstants.EDIT_REQUEST:
      return {
        ...state,
        loggedIn: true,
      };
    case authConstants.EDIT_SUCCESS:
      return {
        ...state,
        profileURL: action.profileURL,
        username: action.username,
        profile: action.profile,
      };
    case authConstants.EDIT_FAILURE:
      return {
        ...state,
        loggedIn: true,
      };
    case authConstants.LOGOUT:
      return {};
    default:
      return state
  }
}