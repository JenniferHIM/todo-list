import React from 'react';
import styles from './styles/main.scss';
import Todos from './components/Todos';

const App = () => {
  return (
    <div className={styles.todoApp}>
      <h1>Todo List</h1>
      <Todos />
    </div>
  );
};

export default App;
