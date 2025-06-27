import React from 'react'

export default function TaskList({tasks, updateTask, deleteTask}) {
    
  return (
    <ul className='task-list'>
        {tasks.map((task, index)=>(
            <li key={index} className= {task.completed ? 'completed': ''}>
                <div>
                    <span>{task.text}</span>
                    <small>({task.priority}, {task.category})</small>
                </div>

                <div className='flex gap-3'>
                    <button onClick={()=>updateTask(index)}
                    >{task.completed ? "Undo" : "Complete"}</button>
                    <button onClick={()=>deleteTask(index)}>Delete</button>
                </div>
            </li>
        ))}
    </ul>
  )
}