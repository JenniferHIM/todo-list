import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import styles from '../styles/main.scss';
import { motion } from "framer-motion";

const sortSwitch = (sort, todos) => {
switch (sort) {
  case 'active':
    return todos.map((item) => {
      return (
        !item.completed && (
          <TodoItem
            key={item.id}
            item={item}
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
        />
      );
    })
default: return <div>null</div>;
}
}

const DisplayTodos = ( ) => {
  const [sort, setSort] = useState('active');
  const todos = useSelector((state) => state);

  return (
    <div className={styles.displayTodos}>
      <div className={styles.buttons}>
           <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort('active')}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort('completed')}
        >
          Completed
        </motion.button>
         <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>
      <ul>
          {!!todos.length && sortSwitch(sort, todos)}
      </ul>
    </div>
  );
};

export default DisplayTodos;
