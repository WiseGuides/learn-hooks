import React from 'react';
import toggleToDo from '../actions/toggleToDo'

const ToDo = ({todo, dispatch}) => {
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