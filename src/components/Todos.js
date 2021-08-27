import React, { useState, useDispatch } from 'react';
import { addTodos } from '../redux/reducer';
import styles from '../styles/main.scss';

const Todos = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const addTodo = () => {
    if (todo === '') {
      alert('Input is empty');
    } else {
      const todoItem = {
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      };
      dispatch(addTodo(todoItem));
      setTodo('');
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className={addTodos}>
      <input type="text" onChange={(e) => handleChange(e)} className={styles.todoInput} value={todo} />
      <button className={styles.addBtn} onClick={addTodo}>
        Add
      </button>
      <br />

      <ul>
        {todo.length &&
          todo.map((item) => {
            return <li key={item.id}>{item.item}</li>;
          })}
      </ul>
    </div>
  );
};

export default Todos;
