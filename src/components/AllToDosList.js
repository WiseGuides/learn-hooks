import React from 'react';
import { useSelector } from 'react-redux';
import ToDoList from './ToDoList';


const AllToDosList = () => {
  const todos = useSelector(state => Object.values(state.todos));
  return <ToDoList todos = {todos} />
};

export default AllToDosList;