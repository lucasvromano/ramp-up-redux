import { createStore, combineReducers } from "redux";
import carsReducer from './cars/reducer';
import layoutReducer from './layout/reducer';

const rootReducer = combineReducers({
  cars: carsReducer,
  layout: layoutReducer
});

export default createStore(rootReducer);