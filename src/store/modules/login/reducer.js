import produce from 'immer';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  SET_LAST_VISITED,
} from './actions';

const initialState = {
  loading: false,
  signed: false,
  token: null,
  lastVisited: null,
};

const login = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_REQUEST: {
        draft.loading = true;
        break;
      }

      case LOGIN_SUCCESS: {
        draft.loading = false;
        draft.signed = true;
        draft.token = action.payload.token;
        draft.lastVisited = null;
        break;
      }

      case LOGIN_FAILURE: {
        draft.loading = false;
        break;
      }

      case LOGOUT_REQUEST: {
        draft.signed = false;
        draft.token = null;
        draft.lastVisited = null;
        break;
      }

      case SET_LAST_VISITED: {
        draft.lastVisited = action.payload;
        break;
      }

      default: {
        break;
      }
    }
  });

export default login;
