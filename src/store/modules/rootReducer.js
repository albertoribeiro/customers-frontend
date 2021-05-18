import { combineReducers } from 'redux';

import login from './login/reducer';
import customers from './customer/reducer';

export default combineReducers({
  login,
  customers,
});
