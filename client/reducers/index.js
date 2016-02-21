import { combineReducers } from 'redux';
import kittens from './kittens';
import contacts_data from './contacts_data';

import { routeReducer } from 'react-router-redux'

const reducers = combineReducers({
  data: contacts_data,
  kittens,
  routing: routeReducer
});

export default reducers;
