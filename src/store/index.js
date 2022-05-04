import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/index';
import layoutReducer from './layout/index';

const rootReducer = {
  cars: carsReducer,
  layout: layoutReducer
}

export default configureStore({ reducer: rootReducer });
