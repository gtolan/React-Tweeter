import {FaTimes} from 'react-icons/fa'

const TaskItem = ({task, onDelete, toggleReminder}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>
            <h3>{task.text} 
                <FaTimes style={{color:'red',cursor:'pointer'}} 
             onClick={() => onDelete(task.id)}
             />
            </h3>
            <p>{task.day}</p>
            <p onClick={() => toggleReminder(task.id)}>{task.reminder ? 'remind me' : 'dont remind me'}</p>
        </div>
    )
}

export default TaskItem