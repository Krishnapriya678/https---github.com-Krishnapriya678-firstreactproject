import React from 'react'

import { Link } from 'react-router-dom';
const TaskList = ({tasks}) => {
  return (
    <div>
         <Link to="/add">Add Task</Link>
        <table>
            <thead>
                <tr>
                    <th>Task title</th>
                    <th>Task description</th>
                    <th>assignee</th>
                    <th>start date</th>
                    <th>end date</th>
                    
               </tr>
           </thead>
           <tbody>
           {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.assignee}</td>
              <td>{task.startDate}</td>
              <td>{task.endDate}</td>
              <td>
                <Link to={`/Edit/${index}`}>Edit</Link> 
              </td>
            </tr>
          ))}
           </tbody>
        </table>
    </div>
  )
}

export default TaskList