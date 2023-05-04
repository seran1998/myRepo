import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  DELETE_ACOUNT,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthentication: null,
  loading: true,
  user: null,
};

export default function AuthReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED: {
      console.log(state);

      state = {
        ...state,
        isAuthentication: true,
        loading: false,
        user: payload,
      };
      console.log(state);
      return state;
    }

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      state = {
        ...state,
        ...payload,
        isAuthentication: true,
        loading: false,
      };
      return state;

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
    case DELETE_ACOUNT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthentication: false,
        loading: false,
      };

    default:
      return state;
  }
}
