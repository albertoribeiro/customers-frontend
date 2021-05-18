import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  loginSuccess,
  loginFailure,
} from './actions';

import { mock } from '~/services/mock';

export function* login({ payload }) {
  try {
    const response = yield call(api.post, '/login', {
      email: payload.email,
      password: payload.password,
    });
    // const response = mock.login({
    //     email: payload.email,
    //     password: payload.password,
    // });

    const { token, user } = response.data.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(loginSuccess(token, user));
    history.push('/home');
  } catch (error) {
    console.log(error)
    toast.error('Falha na conexão; verifique seus dados');
    yield put(loginFailure());
  }
}

export const logout = () => history.push('/');

export function setToken({ payload }) {
  if (payload) {
    const { token } = payload.login;
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(LOGIN_REQUEST, login),
  takeLatest(LOGOUT_REQUEST, logout),
]);
