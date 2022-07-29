import React from 'react';
// import styles from './task.module.css'

export const Task = (props) => {
  return (
    <div style={{backgroundColor: props.completed ? 'green' : 'white'}}>
      <div>{props.taskName}</div>
      <button onClick={() => props.completeTask(props.id)}>done</button>
      <button
        onClick={() => {
          props.deleteTask(props.id);
        }}
      >
        x
      </button>
    </div>
  );
};
