import { userConstants } from '../constants';
import {userService} from "../services";

let user = localStorage.getItem('user') !== "undefined" && typeof localStorage.getItem('user') !== "undefined"
    && JSON.parse(localStorage.getItem('user'));
let username = userService.getUsername();

const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
        username: user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
        username: action.username
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}