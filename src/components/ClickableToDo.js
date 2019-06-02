import React from 'react';
import { connect } from 'react-redux';
import ToDo from './ToDo';

const mapStateToProps = (state, { id }) => {
  console.log(id)
  return { todo: state.todos[id] };
}

// const mapDispatchToProps = (dispatch) => {

// }

const ClickableToDo = connect(mapStateToProps)(ToDo);

export default ClickableToDo;