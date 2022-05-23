import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './reducers/cars';
import layoutReducer from './reducers/layout';

const rootReducer = {
  cars: carsReducer,
  layout: layoutReducer
}

export default configureStore({ reducer: rootReducer });
