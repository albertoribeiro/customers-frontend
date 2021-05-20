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


function* getCustomer(action) {
  try {
    const response = yield call(api.get,`/customers/${action.payload}`);
    yield put(getCustomerSuccess(response.data[0]));
    history.push('/customer');
  } catch (error) {
    console.log(error)
    yield put(getCustomerFailure());
  }
}

function* saveCustomer(action) {
  const customer = action.payload;
  try {

    const { id } = customer
    delete customer.id
    let response = {}

    if (id === '') {
      response = yield call(api.post, `/customers/`, customer);
    } else {
      response = yield call(api.put, `/customers/${id}`, customer);
    }

    yield put(getCustomerSuccess(response.data));
    console.log('XXXXXXXXXXXXXXXXXXX')
    console.log(response.data)
    getCustomer(response.data.id);
    toast.success('Customer saved!');

  } catch (error) {
    console.log(error)
    toast.error('Unable to save Customer.');
    yield put(getCustomerFailure());
  }
}

function* deleteCustomer(action) {
  try {
    const response = yield call(api.delete,`/customers/${action.payload}`);
    yield put(getCustomerSuccess(response.data));
    toast.success('Customer excluded!');
    history.push('/home');
  } catch (error) {
    toast.error('Unable to delete Customer.');
    yield put(getCustomerFailure());
  }
}

export default all([
  takeLatest(GET_CUSTOMER_REQUEST, getCustomer),
  takeLatest(SAVE_CUSTOMER_REQUEST, saveCustomer),
  takeLatest(DELETE_CUSTOMER_REQUEST, deleteCustomer),
]);
