import React from 'react';
import { connect } from 'react-redux';
import ToDoList from './ToDoList';

const mapStateToProps = (state) => {
  console.log("hello")
  return { todos: state.todos };
}

const AllToDosList = connect(mapStateToProps)(ToDoList);

export default AllToDosList;