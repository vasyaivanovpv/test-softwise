import React, { Component } from 'react';
import classnames from 'classnames';

import TodoTextInput from './TodoTextInput';
import { editTodo, deleteTodo } from '../stores/todo';

export default class TodoItem extends Component {
  state = {
    editing: false,
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (id, text) => {
    if (text.length === 0) {
      deleteTodo(id);
    } else {
      editTodo(id, text);
    }
    this.setState({ editing: false });
  };

  render() {
    const { todo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={text => this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div className="view">
          <span onDoubleClick={this.handleDoubleClick}>{todo.text}</span>
          <button className="destroy" onClick={() => deleteTodo(todo.id)}>
            Удалить
          </button>
        </div>
      );
    }

    return (
      <li
        className={classnames({
          editing: this.state.editing,
        })}
      >
        {element}
      </li>
    );
  }
}
