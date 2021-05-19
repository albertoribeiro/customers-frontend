import produce from 'immer';

import {
  CREATE_CUSTOMER_REQUEST,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_FAILURE,
} from './actions';

const initialState = {
  loading: false,
  customer: null,
};

export default function customer(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_CUSTOMER_REQUEST: {
        draft.customer = null;
        break;
      }
      case GET_CUSTOMER_REQUEST: {
        draft.loading = true;
        break;
      }

      case GET_CUSTOMER_SUCCESS: {
        draft.loading = false;
        draft.customer = action.payload
        break;
      }

      case GET_CUSTOMER_FAILURE: {
        draft.loading = false;
        break;
      }

      default: {
        break;
      }
    }
  });
}
