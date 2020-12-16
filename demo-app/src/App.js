import React, {useState, useRef} from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {

  const [todos, setTodos] = useState([]);
  const taskDataRef = useRef();

  const handleAddTask = (e) =>{
    const task = taskDataRef.current.value;
    if(task === '') return null;
    setTodos((prevTodos) => {
      return [...prevTodos, task]
    });

    taskDataRef.current.value = null;
  }


  const handleClearTask = () => {
    /* Assignment */
  }

  return (
    <div className="App">

      <TodoList todos = {todos}/>      
      <input ref={taskDataRef} type ="text"/>
      <button onClick={handleAddTask} >Add Task</button>
      <button onClick={handleClearTask}>Clear All</button>
    </div>
  );
}

export default App;
