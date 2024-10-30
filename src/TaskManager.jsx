// TaskManager.js
import React, { useState } from 'react';
import './TaskManager.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');

  // Add Task Handler
  const addTask = (title, description) => {
    setTasks([...tasks, { id: Date.now(), title, description, completed: false }]);
  };

  // Toggle Complete Status
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>
      <div className="task-input">
        <input type="text" placeholder="Title" id="taskTitle" />
        <input type="text" placeholder="Description" id="taskDescription" />
        <button onClick={() => {
          const title = document.getElementById('taskTitle').value;
          const description = document.getElementById('taskDescription').value;
          if (title && description) {
            addTask(title, description);
            document.getElementById('taskTitle').value = '';
            document.getElementById('taskDescription').value = '';
          }
        }}>Add Task</button>
      </div>

      <input className="text" type="text" placeholder="Search tasks..." onChange={(e) => setFilter(e.target.value.toLowerCase())} />

      <ul className="task-list">
        {tasks
          .filter(task => task.title.toLowerCase().includes(filter))
          .map(task => (
            <li key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TaskManager;
