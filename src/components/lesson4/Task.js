import React from 'react';
// import styles from './task.module.css'

export const Task = (props) => {
	return (
		<div>
       <span >{props.taskName}</span>
        <button
        className="button"
        onClick={() => {
          props.deleteTask(props.id);
        }}>x</button>
		</div>
	);
};
