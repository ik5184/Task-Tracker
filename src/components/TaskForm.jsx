import React, { useState } from 'react';

export default function TaskForm({ addTask }) {
    const [userTask, setUserTask] = useState({ task: '', priority: 'Medium', category: 'General' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserTask((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ text: userTask.task, priority: userTask.priority, category: userTask.category, completed: false });
        setUserTask({ task: '', priority: 'Medium', category: 'General' });
    };

    return (
        <form onSubmit={handleSubmit} className='flex items-center mt-4'>
            <div id="" className='flex  justify-around w-full p-4 text-black '>
                <input required
                    name='task'
                    type="text"
                    placeholder='Enter Your Task'
                    value={userTask.task}
                    onChange={handleChange}
                    className='border-2 border-gray-500 rounded-2xl w-[60%]  bg-white p-2'
                />
                <span className=' border-2 border-amber-600 rounded-2xl p-2 cursor-pointer  bg-white hover:scale-110'><button className='cursor-pointer  '  onClick={handleSubmit}>Add Task</button></span>
            </div>

            <div id="" className='flex p-4 gap-2'>
                <select className='border-1 rounded-2xl  bg-white border-amber-700 p-2 cursor-pointer hover:scale-110' name='priority' value={userTask.priority} onChange={handleChange}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <select className='border-1 rounded-2xl border-amber-700 bg-white p-2 cursor-pointer hover:scale-110' name='category' value={userTask.category} onChange={handleChange}>
                    <option value="General">General</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
        </form>
    );
}
