const toggleToDo = todoId => {
  return {
    type: 'TOGGLE_TODO',
    todoId
  }
}

export default toggleToDo