export const CREATE_CUSTOMER_REQUEST = '@customer/CREATE_CUSTOMER_REQUEST';
export const GET_CUSTOMER_REQUEST = '@customer/GET_CUSTOMER_REQUEST';
export const GET_CUSTOMER_SUCCESS = '@customer/GET_CUSTOMER_SUCCESS';
export const GET_CUSTOMER_FAILURE = '@customer/GET_CUSTOMER_FAILURE';
export const SAVE_CUSTOMER_REQUEST = '@customer/SAVE_CUSTOMER_REQUEST';
export const DELETE_CUSTOMER_REQUEST = '@customer/DELETE_CUSTOMER_REQUEST';

export const createCustomerRequest = _ => ({
  type: CREATE_CUSTOMER_REQUEST,
});

export const getCustomerRequest = id => ({
  type: GET_CUSTOMER_REQUEST,
  payload: id,
});

export const getCustomerSuccess = customer => ({
  type: GET_CUSTOMER_SUCCESS,
  payload: customer,
});

export const getCustomerFailure = _ => ({
  type: GET_CUSTOMER_FAILURE,
});

export const saveCustomerRequest = customer => ({
  type: SAVE_CUSTOMER_REQUEST,
  payload: customer,
});

export const deleteCustomerRequest = id => ({
  type: DELETE_CUSTOMER_REQUEST,
  payload: id,
});
