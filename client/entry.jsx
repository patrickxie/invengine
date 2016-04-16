'use strict';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import jss from 'jss';
import jssVendorPrefixer from 'jss-vendor-prefixer';
import jssPx from 'jss-px';
import jssNested from 'jss-nested';
import jssCamelCase from 'jss-camel-case';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import { compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory }
from 'react-router';
import { syncHistory } from 'react-router-redux';
import { Auth, Index, Invite, Display, SendInvites } from './pages/export';
import createDebounce from 'redux-debounced';
import { observer, observe } from 'redux-observers';
import { saveContactsToServer } from './actions/contacts_data';
import createEngine from 'redux-storage-engine-localstorage';
import * as storage from 'redux-storage'

import { createTracker } from 'redux-segment';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

jss.use(jssVendorPrefixer());
jss.use(jssPx());
jss.use(jssNested());
jss.use(jssCamelCase());


const tracker = createTracker();

const middleware = syncHistory(browserHistory);


const engine = createEngine('invengine-store');
const reducer = storage.reducer(reducers);
const storager = storage.createMiddleware(engine);

const createStoreWithMiddleware = applyMiddleware(
  createDebounce(),
  thunk,
  promise,
  createLogger(),
  middleware,
  tracker,
  storager,
)(createStore);
const store = createStoreWithMiddleware(reducer);
middleware.listenForReplays(store);

const load = storage.createLoader(engine);
load(store)
    .then((newState) => console.log('Loaded state:', newState))
    .catch(() => console.log('Failed to load previous state'));


const myObserver = observer(
  state => state.data,
  (dispatch, current, previous) => {
    dispatch(saveContactsToServer())
  }
)

observe(store, [myObserver])

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={Index}>
          <IndexRoute component={Auth}/>
          <Route path='invite' component={Invite}/>
          <Route path='home' component={Display}/>
          <Route path='sendconfirm' component={SendInvites}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
