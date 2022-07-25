import React, {useState} from 'react';

const Lesson4 = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleNewTaskInput = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => setTodoList([...todoList, newTask]);

  return (
    <div>
      <h1>Lesson 4</h1>
      <p>TODO list</p>
      <div className='add-task'></div>
      <input type='text' onChange={handleNewTaskInput} />
      <button onClick={addTask}>Click me</button>
      <div className='list'>
        {todoList.map((task) => {
          return (
            <>
              <h1>{task}</h1>
              <button>x</button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Lesson4;
