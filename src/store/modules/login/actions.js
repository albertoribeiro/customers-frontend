export const LOGIN_REQUEST = '@login/LOGIN_REQUEST';
export const LOGIN_SUCCESS = '@login/LOGIN_SUCCESS';
export const LOGIN_FAILURE = '@login/LOGIN_FAILURE';
export const LOGOUT_REQUEST = '@login/LOGOUT_REQUEST';
export const SET_LAST_VISITED = '@login/SET_LAST_VISITED';

export const setLastVisited = lastVisited => ({
  type: SET_LAST_VISITED,
  payload: lastVisited,
});

export const loginRequest = ({ email, password }) => ({
  type: LOGIN_REQUEST,
  payload: { email, password },
});

export const loginSuccess = (token, user) => ({
  type: LOGIN_SUCCESS,
  payload: { token, user },
});

export const loginFailure = () => ({ type: LOGIN_FAILURE });

export const logoutRequest = () => ({ type: LOGOUT_REQUEST });
