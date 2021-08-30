import React, {useRef} from 'react';
import {AiFillEdit} from 'react-icons/ai';
import { IoCheckmarkDoneSharp, IoClose } from 'react-icons/io5';
import styles from '../styles/main.scss';

const TodoItem = ({item, updateTodo, removeTodo, completeTodo}) => {

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({id, item: value});
      inputRef.current.disabled = true;
    }
  };

  return (
    <li key={item.id} className={styles.card}>
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className={styles.Btns}>
        <button onClick={changeFocus}>
          <AiFillEdit />
        </button>
        {item.completed === false && (
          <button style={{color: 'green'}} onClick={() => completeTodo(item.id)}>
            <IoCheckmarkDoneSharp />
          </button>
        )}
        <button style={{color: 'red'}} onClick={() => removeTodo(item.id)}>
          <IoClose />
        </button>
      </div>
      {item.completed && <span className={styles.completed}>done</span>}
    </li>
  );
};

export default TodoItem;
