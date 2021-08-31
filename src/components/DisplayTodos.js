import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos
} from '../redux/reducer';
import TodoItem from './TodoItem';
import styles from '../styles/main.scss';

const sortSwitch = (sort, todos, removeTodo, updateTodo, completeTodo) => {
switch (sort) {
  case 'active':
    return todos.map((item) => {
      return (
        !item.completed && (
          <TodoItem
            key={item.id}
            item={item}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            completeTodo={completeTodo}
          />
        )
      );
    })
  case 'completed':
    return todos.map((item) => {
      return (
        item.completed === true && (
          <TodoItem
            key={item.id}
            item={item}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            completeTodo={completeTodo}
          />
        )
      );
    })
  case 'all':
    return todos.map((item) => {
      return (
        <TodoItem
          key={item.id}
          item={item}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          completeTodo={completeTodo}
        />
      );
    })
default: return <div>null</div>;
}
}

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = ({todos, removeTodo, updateTodo, completeTodo} ) => {
  const [sort, setSort] = useState('active');
  
  return (
    <div className={styles.displayTodos}>
      <div className={styles.buttons}>
        <button onClick={() => setSort('active')}>Active</button>
        <button onClick={() => setSort('completed')}>Completed</button>
        <button onClick={() => setSort('all')}>All</button>
      </div>
      <ul>
        {!!todos.length && sortSwitch(sort, todos, removeTodo, updateTodo, completeTodo)}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
