import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import makeRootReducer from './reducers/index';
import App from './app/App.jsx';
import Home from './app/Home.jsx';
import About from './app/About.jsx';

let store = null;
const middleware = applyMiddleware(thunk);
const enhancer = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && compose
);

store = createStore(
  makeRootReducer(),
  enhancer
);

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} >
    </Router>
  </Provider>
  , document.getElementById('root'));