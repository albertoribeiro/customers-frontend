import { all } from 'redux-saga/effects';

import login from './login/sagas';
import customer from './customer/sagas';

export default function* rootSaga() {
  return yield all([login, customer]);
}
