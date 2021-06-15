import React from 'react';
import { useStore } from 'laco-react';

import TodoList from '../components/TodoList';
import Footer from './Footer';
import { TodoStore } from '../stores/todo';

const MainSection = () => {
  const { todos } = useStore(TodoStore);
  const todosCount = todos.length;
  return (
    <section className="main">
      {!!todosCount ? (
        <React.Fragment>
          <TodoList />
          <Footer todosCount={todosCount} />
        </React.Fragment>
      ) : (
        <div className="list-none">Список элементов пуст!</div>
      )}
    </section>
  );
};

export default MainSection;
