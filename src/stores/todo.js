import { Store } from 'laco';

export const TodoStore = new Store(
  {
    todos: [
      {
        text: 'Первая задача',
        id: 0,
      },
    ],
  },
  'TodoStore'
);

export const addTodo = text =>
  TodoStore.set(
    ({ todos }) => ({
      todos: [
        ...todos,
        {
          id: todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text,
        },
      ],
    }),
    'Add todo'
  );

export const deleteTodo = id =>
  TodoStore.set(
    ({ todos }) => ({
      todos: todos.filter(item => item.id !== id),
    }),
    'Delete todo'
  );

export const editTodo = (id, text) =>
  TodoStore.set(
    ({ todos }) => ({
      todos: todos.map(todo => (todo.id === id ? { ...todo, text } : todo)),
    }),
    'Edit todo'
  );
