import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({todos}) => {
  const todoEls = todos.map(todo => (
    <ToDo todo={todo} key={todo.id}/>
  ));
  return <div>{todoEls}</div>
}

export default ToDoList;