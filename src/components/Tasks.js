import TaskItem from './TaskItem'
// import { useState } from 'react';

 const Tasks = ({tasks, onDelete, toggleReminder}) => {

    return (
        <>
         {tasks.map((task) =>(
             <TaskItem key={task.id} 
                task={task}
                onDelete={onDelete}
                toggleReminder={toggleReminder}
             />
         ))}   
        </>
    )
}

export default Tasks
