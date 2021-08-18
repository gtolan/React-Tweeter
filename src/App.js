import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState( [{
    id:1,
    text:'Doctor Appointment',
    day: 'Feb 5th',
    reminder:true
},
{
    id:2,
    text:'Barber Haircut',
    day: 'Feb 6th',
    reminder:true
},
{
    id:3,
    text:'Bins out',
    day: 'March 7th',
    reminder:false
}]);

  //Delete Task
  const deleteTask = (id) => {
    console.log('delete item', id);
    setTasks(
      tasks.filter(task => task.id !== id)
    )
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map(task => task.id === id ? 
        {...task, reminder: !task.reminder} : task)
    )
    console.log('toggle', id)
  }

  //Add Task
  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = {id, ...task}
 
    console.log('add task item',task , tasks, newTask);
  
    setTasks([...tasks, newTask])
  }

  return (
      <div className="container">
        <Header title={`Task Tracker`} showForm={
          () => setShowAddTask(!showAddTask)}
          showAddButton={showAddTask}/>
        {showAddTask && <AddTask onAddTask={addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} 
          toggleReminder={toggleReminder}/>
        : 'No tasks'
        }
      </div>
  );
}

//Class version
// class App extends React.Component{
//   render(){
//     return  <div className="App">
//               <Header/>
//             </div>
    
//   }
// }

export default App;