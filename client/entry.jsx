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
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import { Auth, Index, Invite, Display, SendInvites } from './pages/export';


// import { get, post, del } from './utils/api';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

jss.use(jssVendorPrefixer());
jss.use(jssPx());
jss.use(jssNested());
jss.use(jssCamelCase());


// import { syncHistoryWithStore } from 'react-router-redux'
// const store = configureStore()
// const history = syncHistoryWithStore(browserHistory, store)
const middleware = syncHistory(browserHistory);

//original
// const history = createHistory();
// const middleware = syncHistory(history);

//original
// const createStoreWithMiddleware = applyMiddleware(
//   thunk,
//   promise,
//   createLogger()
// )(createStore);
// const store = createStoreWithMiddleware(reducers);



const createStoreWithMiddleware = applyMiddleware(
  thunk,
  promise,
  createLogger(),
  middleware
)(createStore);
const store = createStoreWithMiddleware(reducers);
middleware.listenForReplays(store);

// const finalCreateStore = compose(
//   applyMiddleware(middleware),
//   DevTools.instrument()
// )(createStore)
// const store = finalCreateStore(reducer)
// middleware.listenForReplays(store)


  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     store.replaceReducer(require('./../reducers').default);
  //   });
  // }

// window.onbeforeunload = async function () {
//   var a = store.getState()
//   //store.dispatch(callServer)
//   const result = await post('http://localhost:5000/api/ayy', a)
//   // return null
// };

// window.onbeforeunload = function () {
//   var a = store.getState()
//   //store.dispatch(callServer)
//   post('http://localhost:5000/api/ayy', a)
//   var x = 'ayy'
//   setTimeout(function(x){ x = 'deeee' }, 13000);
//   setTimeout(function(){
//     console.log('after');
// },500);
//   if (x == 'deeee'){
//       return x
//     }
// };

// window.onbeforeunload = function () {
//   var a = store.getState()
//   //store.dispatch(callServer)
//   var url = 'http://localhost:5000/api/ayy';
//   fetch(url, {
//       credentials: 'omit',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(a)
//     })
// };


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
