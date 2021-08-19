import TaskItem from './TaskItem'
import {useStore} from 'easy-peasy';

const Tasks = ({onDelete, toggleReminder}) => {
    const tasks = useStore(state => state.todos);
    console.log(tasks, 'tss')
    return (
        <>
         {tasks && tasks.length > 0 ? (tasks.map((task, index) =>(
             <TaskItem key={`task.id-${index}`} 
                task={task}
                onDelete={onDelete}
                toggleReminder={toggleReminder}
             />
         ))) : 'NO tasks'}   
        </>
    )
}

export default Tasks
