import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cityReducer from './cities/citiesSlice';
import searchReducer from './search/searchSlice';

const store = configureStore({
  reducer: {
    cities: cityReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
