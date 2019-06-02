import React from 'react';
import ClickableToDo from './ClickableToDo';

const ToDoList = ({todos}) => {
  console.log("hi")
  const todoEls = Object.values(todos).map(todo => (
    <ClickableToDo id={todo.id} key={todo.id} />
  ));
  return <div>{todoEls}</div>
}

export default ToDoList;