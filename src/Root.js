import React from 'react';
import App from './App';
import seedData from './seed_data';
import {
  Provider
} from 'react-redux';
import {
  createStore
} from 'redux';
import root from './reducers/root';

const store = createStore(
  root,
  seedData,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = (props) => {
  return ( <Provider store = {store}>< App / ></Provider> );
};

export default Root;