import TaskItem from './TaskItem'
import {useStore} from 'easy-peasy';
import { Fragment } from 'react';

const Tasks = ({onDelete, toggleReminder}) => {
    const tasks = useStore().getState().todos

    return (
        <Fragment>
         {tasks && tasks.length > 0 ? (tasks.map((task, index) =>(
             <TaskItem key={`task.id-${index}`} 
                task={task}
                onDelete={onDelete}
                toggleReminder={toggleReminder}
             />
         ))) : 'NO tasks'}   
        </Fragment>
    )
}

export default Tasks
