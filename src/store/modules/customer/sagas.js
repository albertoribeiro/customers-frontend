import { call, all, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  GET_CUSTOMER_REQUEST,
  SAVE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_REQUEST,
  getCustomerSuccess,
  getCustomerFailure,
} from './actions';
import { mock } from '../../../services/mock';

function* getCustomer(action) {
  try {
    // const response = yield call(api.get, `/customers/${action.payload}`);
    const response = mock.getCustomerById(action.payload)
    yield put(getCustomerSuccess(response.data));
    history.push('/customer');
  } catch (error) {
    console.log(error)
    yield put(getCustomerFailure());
  }
}

function* saveCustomer(action) {
  const customer = action.payload;
  try {
    // if (customer._id) {
      // const response = yield call(api.put, `/customers/${customer._id}`, customer);
      const response = mock.saveCustomer(customer)
      yield put(getCustomerSuccess(response.data));
      getCustomer(response.data.data.id);
    // } else {
    //   const response = yield call(api.post, `/customers/`, customer);
    //   yield put(getCustomerSuccess(response.data));
    //   getCustomer(response.data.data._id);
    // }

    toast.success('Perfil salvo com sucesso!');
  } catch (error) {
    console.log(error)
    toast.error('Falha ao salvar perfil');
    yield put(getCustomerFailure());
  }
}

function* deleteCustomer(action) {
  try {
    // const response = yield call(api.delete, `/customers/${action.payload}`);
    const response = mock.deleteCustomer(action.payload)
    yield put(getCustomerSuccess(response.data));
    toast.success('Perfil excluído com sucesso!');
    history.push('/home');
  } catch (error) {
    toast.error('Falha ao excluir perfil');
    yield put(getCustomerFailure());
  }
}

export default all([
  takeLatest(GET_CUSTOMER_REQUEST, getCustomer),
  takeLatest(SAVE_CUSTOMER_REQUEST, saveCustomer),
  takeLatest(DELETE_CUSTOMER_REQUEST, deleteCustomer),
]);
