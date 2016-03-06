import { combineReducers } from 'redux';

import contacts_data from './contacts_data';
import assistvars from './assist_variables';
import toinvlist from './to_invite_list';
import configvars from './config_variables';

import { routeReducer } from 'react-router-redux'
// import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
  data: contacts_data,
  assistvars,
  toinvlist,
  configvars,
  //routing: routeReducer the newest version
  routing: routeReducer
});

export default reducers;
