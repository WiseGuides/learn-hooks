import React from 'react';
import toggleToDo from '../actions/toggleToDo';
import { useDispatch } from 'react-redux';

const ToDo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {todo.name} <br />
      Assigned to {todo.assignedTo} <br />
      Completed: <input
        type='checkbox'
        checked={todo.completed}
        onClick={() => dispatch(toggleToDo(todo.id))} />
    </div>
  );
}

export default ToDo;