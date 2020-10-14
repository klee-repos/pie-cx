import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import * as reducers from './modules/';

const store = createStore(
  combineReducers(reducers), 
  compose(
      applyMiddleware(thunk),
      // ** THIS IS FOR DEVELOPMENT PURPOSES ONLY **
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
))

export default store;