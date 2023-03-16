import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cityReducer from './cities/citiesSlice';
import searchReducer from './search/searchSlice';

const store = configureStore({
  reducer: {
    cities: cityReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === 'development') {
      return getDefaultMiddleware().concat(logger);
    }

    return getDefaultMiddleware();
  },
});

export default store;
