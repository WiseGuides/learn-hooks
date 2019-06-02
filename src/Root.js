import React from 'react';
import App from './App';
import {
  Provider
} from 'react-redux';
import {
  createStore
} from 'redux';
import root from './reducers/root';

const seedData = {
  todos: {
    "1": {
      id: "1",
      name: "Read documentation for XPR 2000",
      assignedTo: "1",
      completed: true
    }
  },
  people: {}
};

const store = createStore(
  root,
  seedData,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = (props) => {
  return ( <Provider store = {store}>< App / ></Provider> );
};

export default Root;