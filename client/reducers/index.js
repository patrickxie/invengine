import { combineReducers } from 'redux';

import contacts_data from './contacts_data';
import assistvars from './assist_variables';
import toinvlist from './to_invite_list';
import configvars from './config_variables';
import imported from './imported';
import pictures from './pictures';
import { routeReducer } from 'react-router-redux';
import { reducer as notifReducer } from 're-notif';

const reducers = combineReducers({
  data: contacts_data,
  imported,
  assistvars,
  toinvlist,
  configvars,
  pictures,
  notifs: notifReducer,
  //routing: routeReducer the newest version
  routing: routeReducer
});

export default reducers;
