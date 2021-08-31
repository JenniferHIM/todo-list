import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos } from '../redux/reducer';
import styles from '../styles/main.scss';

const Todos = () => {
  const [todo, setTodo] = useState('');
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const add = () => {
    if (todo === '') {
      alert('Input is empty');
    } else {
      const todoItem = {
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      };
      dispatch(addTodos(todoItem));
      setTodo('');
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className={addTodos}>
      <input type="text" onChange={(e) => handleChange(e)} className={styles.todoInput} value={todo} />
      <button className={styles.addBtn} onClick={add}>
        Add
      </button>
      <br />
    </div>
  );
};

export default Todos;


