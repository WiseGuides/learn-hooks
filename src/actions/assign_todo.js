export default assignTodo = (todoId, personId) => {
  return { type: 'ASSIGN_TODO', todoId , personId }
}