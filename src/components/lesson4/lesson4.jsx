import {buildQueries} from '@testing-library/react';
import React, {useState} from 'react';
import styles from "./lesson4.module.css";

const Lesson4 = () => {
  const title = 'Lesson 4';
  const subTitle = 'Todo list';
  const [newTask, setNewTask] = useState('');
  const [todoList, setTodoList] = useState([]);


  const handleNewTaskInput = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () =>
  {
    const task = {
      id: todoList.length === 0 ? 1: todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    }
    setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter(task => task.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className={styles.lesson4}>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <input type='text' onChange={handleNewTaskInput} />
      <button onClick={addTask}>Click me</button>
      <div className={styles.list}>
        {todoList.map((task) => {
          return (
            <div key={task.id}>
              <span >{task.taskName}</span>
              <button
              className={styles.button}
              onClick={() => {
                deleteTask(task.id);
              }}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lesson4;
