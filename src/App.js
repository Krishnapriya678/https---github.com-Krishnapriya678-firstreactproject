import React, { useState } from 'react';
import TaskList from './components/TaskList';
import Add from './components/add';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Task List</h1>
      <TaskList tasks={tasks} />
      <Add onAddTask={handleAddTask} />
      
    </div>
  );
};

export default App;
