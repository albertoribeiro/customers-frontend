import { combineReducers } from 'redux';

import login from './login/reducer';
import customer from './customer/reducer';

export default combineReducers({
  login,
  customer,
});
