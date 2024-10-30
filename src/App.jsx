// App.js
import React, { useState, useEffect } from 'react';
import TaskManager from './TaskManager';
import './App.css';

function App () {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode to the root HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="App">
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <TaskManager />
    </div>
  );
};

export default App;
