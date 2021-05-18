import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'pagaleve-persistence',
      storage,
      whitelist: ['login', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
