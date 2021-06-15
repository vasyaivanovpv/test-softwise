import React from 'react';
import { useStore } from 'laco-react';

import TodoItem from './TodoItem';
import { TodoStore } from '../stores/todo';

const TodoList = () => {
  const { todos } = useStore(TodoStore);
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
