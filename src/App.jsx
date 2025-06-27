import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ProgressTracker from './components/ProgressTracker';
import './Style.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (task.text) {
      setTasks([...tasks, task]);
      toast.success("Task added successfully!");
    } else{

      toast.error("Fill the required detail");
    }
   
  };

  const updateTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    toast.info("Task status updated!");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
    toast.warn("Task deleted!");
  };

  const clearTasks = () => {
    setTasks([]);
    toast.error("All tasks cleared!");
  };

  return (
    <div className='  bg-amber-800 p-4'>
      < header className='flex flex-col justify-center items-center'>
        <h1 className=''>Task Tracker</h1>
        <p className='tagline'>Your friendly Task Tracker</p>
      </header>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <ProgressTracker tasks={tasks} />
      <ToastContainer />

      {tasks.length > 0 && (
        <div className='flex justify-center items-center'>

          <button className='border-2 bg-white p-3 rounded-2xl cursor-pointer hover:bg-indigo-200 transition-all duration-200 hover:scale-105 ' onClick={clearTasks}>Clear All Tasks</button>
        </div>
      )}
    </div>
  );
}
