/*
 * App reducer
 */

import {
  SET_AUTH,
  USERINFO_REQUEST_SUCCESS,
  USERINFO_REQUEST_ERROR,
  LOGOUT,
  GLOBAL_ERROR,
  SHOW_GLOBAL_PROMPT,
} from './constants';

import {
  TOKEN_ERROR,
} from './errors';

import { fromJS, List } from 'immutable';

const initialState = fromJS({
  userInfo: {
    avatar: '',
    email: '',
    mobile: '',
    name: '',
    policy: {},
    socials: [],
    uid: '',
    error: '',
  },
  loggedIn: localStorage.access_token && Date.now() < localStorage.expires_in,
  globalPrompt: {
    type: '',
    timeout: 3000,
    open: false,
    message: '默认消息',
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return state.set('loggedIn', action.newAuthState);
    case USERINFO_REQUEST_SUCCESS:
      return state.mergeDeep(fromJS({ userInfo: action.userInfo }));
    case USERINFO_REQUEST_ERROR:
      return state.setIn(['userInfo', 'error'], action.error);
    case LOGOUT: {
      const localStorage = global.window.localStorage;
      localStorage.removeItem('token');
      localStorage.removeItem('expiresIn');
      window.location.href = window.location.origin;
      return state;
    }
    case GLOBAL_ERROR:
      switch (action.code) {
        case TOKEN_ERROR:
          window.location.href = window.location.origin;
          break;
        default:
          break;
      }
      return state;
    case SHOW_GLOBAL_PROMPT:
      return state.mergeDeep(fromJS({ globalPrompt: action.config }));
    default:
      return state;
  }
}

export default appReducer;
