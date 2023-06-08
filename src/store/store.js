import logger from 'redux-logger';
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from './root-reducer';
import  storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';

const middleWares = [process.env.NODE_ENV === 'production' && logger].filter(
  Boolean
);

const persistConfig = {
  key: 'root',
  version:1,
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer :persistedReducer,
  middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(middleWares),
})