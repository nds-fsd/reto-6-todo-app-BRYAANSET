import { useState, useEffect } from 'react';
import './App.css'
import MainPanel from './components/main-panel';
import TaskCard from './components/task-card';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3001/todo');
      if (!response.ok) {
        throw new Error('Error fetching tasks');
      }

      const tasksData = await response.json();
      setTasks(tasksData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:3001/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error sending data to server');
      }

      const responseData = await response.json();
      console.log('Server response:', responseData);

      await fetchTasks();
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <Routes>
      <Route
        path='/'
        element={
          <div>
            <MainPanel onSubmit={handleFormSubmit} />
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <TaskCard key={task.id} text={task.text} done={task.done} />
              ))
            ) : (
              <p>No tasks available</p>
            )}
          </div>
        }
      />
    </Routes>
  );
}

export default App;