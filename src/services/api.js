import axios from 'axios';
import { store } from '~/store';
import { logoutRequest } from '~/store/modules/login/actions';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status === 401) {
      await store.dispatch(logoutRequest());
    }
    return error;
  }
);

export default api;
