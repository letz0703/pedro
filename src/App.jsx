import {useState} from 'react';

import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  return (
    <div className='App'>
      <div className='addTask'>
        <input placeholder='hi' />
        <h1>Add Task</h1>
      </div>
      <div className='list'></div>
    </div>
  );
}

export default App;
