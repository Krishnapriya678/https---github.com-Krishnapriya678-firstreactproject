import React, { useState } from 'react';

const Add = ({ onAddTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    attachment: '',
    assignee: '',
    startDate: '',
    endDate: '',
    estimatedTime: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any validation if required
    onAddTask(task);
    
    setTask({
      title: '',
      description: '',
      attachment: '',
      assignee: '',
      startDate: '',
      endDate: '',
      estimatedTime: '',
    });
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task title:</label>
          <input type="text" name="title" value={task.title} onChange={handleChange} />
        </div>
        <div>
          <label>Task description:</label>
          <textarea name="description" value={task.description} onChange={handleChange} />
        </div>
        <div>
          <label>Attachment option:</label>
          <input type="file" name="attachment" onChange={handleChange} />
        </div>
        <div>
          <label>Assignee:</label>
          <input type="text" name="assignee" value={task.assignee} onChange={handleChange} />
        </div>
        <div>
          <label>Start date:</label>
          <input type="date" name="startDate" value={task.startDate} onChange={handleChange} />
        </div>
        <div>
          <label>End date:</label>
          <input type="date" name="endDate" value={task.endDate} onChange={handleChange} />
        </div>
        <div>
          <label>Estimated time:</label>
          <input
            type="text"
            name="estimatedTime"
            value={task.estimatedTime}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Add;
