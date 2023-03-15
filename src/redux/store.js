import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cityReducer from './cities/citiesSlice';

const store = configureStore({
  reducer: {
    cities: cityReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
