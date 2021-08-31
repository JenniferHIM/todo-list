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

// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { addTodos } from "../redux/reducer";
// import { GoPlus } from "react-icons/go";
// import { motion } from "framer-motion";
// import styles from '../styles/main.scss';

// const mapStateToProps = (state) => {
//   return {
//     todos: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (obj) => dispatch(addTodos(obj)),
//   };
// };

// const Todos = (props) => {
//   const [todo, setTodo] = useState("");

//   const handleChange = (e) => {
//     setTodo(e.target.value);
//   };

//   const add = () => {
//     if (todo === "") {
//       alert("Input is Empty");
//     } else {
//       props.addTodo({
//         id: Math.floor(Math.random() * 1000),
//         item: todo,
//         completed: false,
//       });
//       setTodo("");
//     }
//   };
//   return (
//     <div className={styles.addTodos}>
//       <input
//         type="text"
//         onChange={(e) => handleChange(e)}
//         className={styles.todoInput}
//         value={todo}
//       />

//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className={styles.addBtn}
//         onClick={() => add()}
//       >
//         <GoPlus />
//       </motion.button>
//       <br />
//     </div>
//   );
// };
// //we can use connect method to connect this component with redux store
// export default connect(mapStateToProps, mapDispatchToProps)(Todos);

