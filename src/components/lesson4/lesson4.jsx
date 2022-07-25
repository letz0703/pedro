import React, {useState} from 'react';

const Lesson4 = () => {
  const [todoList, setTodoList] = useState([]);
  const [newtaskInput, setNewtaskInput] = useState('');
  const handleNewTaskInput = (e) => {
    setTodoList(e.target.value);
    console.log(todoList);
  };

  return (
    <div>
      <h1>Lesson 4</h1>
      <p>TODO list</p>
      <div className='add-task'></div>
      <input type='text' onChange={handleNewTaskInput} />
      <button>Click me</button>
      <div className='list'></div>
    </div>
  );
};

export default Lesson4;
