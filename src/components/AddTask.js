import {useState} from 'react'

const AddTask = ({onAddTask}) => {
    const [text, setText] = useState();
    const [day, setDay] = useState();
    const [reminder, setReminder] = useState(false);//default false
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(!text){ return alert('Add Text')}
        
        onAddTask({text,day,reminder});
        setText('');
        setDay('');
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day</label>
                <input type='date' placeholder='Add day and time' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check' value={reminder} >
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />
            
        </form>
    )
}

export default AddTask
