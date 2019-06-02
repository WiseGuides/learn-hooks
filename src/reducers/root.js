import produce from 'immer';

const root = (state, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_TODO':
        draft.todos.push({
          id: (Math.random() * 100000).toString(),
          assignedTo: null,
          name: action.name,
          completed: false,
        });
        break;
      case 'TOGGLE_TODO':
        const todo = draft.todos[action.todoId]
        todo.completed = !todo.completed;
        break;
    }
  })

}

export default root;