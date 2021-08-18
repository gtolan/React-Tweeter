import TaskItem from './TaskItem'
// import { useState } from 'react';

 const Tasks = ({tasks, onDelete, toggleReminder}) => {

    return (
        <>
         {tasks.map((task, index) =>(
             <TaskItem key={`task.id-${index}`} 
                task={task}
                onDelete={onDelete}
                toggleReminder={toggleReminder}
             />
         ))}   
        </>
    )
}

export default Tasks
