import React, { useState, useSelector, useDispatch } from 'react';
import {connect} from 'react-redux';
import {addTodos} from '../redux/reducer';

const Todos = ({addTodo, todos}) => {
  const [todo, setTodo] = useState('');
  const selector = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const addTodo = () => {
    if (todo === '') {
      alert('Input is empty');
    } else {
      addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      dispatch(addTodo(''));
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className={addTodos}>
      <input type="text" onChange={(e) => handleChange(e)} className={todoInput} value={todo} />
      <button className={addBtn} onClick={add}>
        Add
      </button>
      <br />

      <ul>
        {todos.length &&
          todos.map((item) => {
            return <li key={item.id}>{item.item}</li>;
          })}
      </ul>
    </div>
  );
};

export default Todos;
