import { combineReducers } from 'redux';
// import kittens from './kittens';
import contacts_data from './contacts_data';
import assistvars from './assist_variables';
import toinvlist from './to_invite_list';

import { routeReducer } from 'react-router-redux'

const reducers = combineReducers({
  data: contacts_data,
  assistvars,
  toinvlist,
  // kittens,
  routing: routeReducer
});

export default reducers;
