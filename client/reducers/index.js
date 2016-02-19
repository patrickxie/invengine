import { combineReducers } from 'redux';
import kittens from './kittens';

import { routeReducer } from 'react-router-redux'

const reducers = combineReducers({
  kittens,
  routing: routeReducer
});

export default reducers;
