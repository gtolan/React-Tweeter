import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'

import model from './model'
import {StoreProvider, createStore, useStore} from 'easy-peasy'
import { useState, useEffect } from 'react';
import './App.css';
import './index.css';

//console.log(model)
const store = createStore(model)


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  // const [tasks, setTasks] = useState([]);
  
  
const tasks = []
  // setTasks(...todos)

  // useEffect(() => {
  //     const getTasks = async () => {
  //       const tasksFromServer = await fetchData()
  //       setTasks(tasksFromServer)
  //     }
  //     getTasks()
  // },[])


  //Fetch Data
  const fetchData = async () => {
    const resp = await fetch('http://localhost:5000/tasks')
    const data = await resp.json()
    console.log(data)
    return data;
  }
  //Fetch Task Item
  const fetchTaskItem = async (id) => {
    const resp = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await resp.json()
    console.log(data)
    return data;
  }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, 
                  {method:'DELETE'})
    // setTasks(
    //   tasks.filter(task => task.id !== id)
    // )
  }

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskItem = await fetchTaskItem(id);
    const updateTask = {...taskItem, reminder: !taskItem.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,
                            {
                             method:'PUT',
                             headers:{'Content-type':'application/json'},
                             body: JSON.stringify(updateTask)
                            }
                            )
    const data = await res.json()

    // setTasks(
    //   tasks.map(task => task.id === id ? 
    //     {...task, reminder: !data.reminder} : task)
    // )
    console.log('toggle', id, data)
  }

  //Add Task
  const addTask = async (task) => {
    //const id = tasks.length + 1;
    const newTask = {...task}
    const res = await fetch('http://localhost:5000/tasks', {method: 'POST', 
                                                headers:{
                                                        'Content-type':'application/json'
                                                        },
                                                body:JSON.stringify(newTask)})
 
    const data = await res.json()                                                    
    // setTasks([...tasks, data])
  }

  const todos = useStore(state => state.todos);
  console.log(todos, 'tss-=todos')

  return (
    <StoreProvider store={store}>
    <Router>
     
      <div className="container">
        <Header title={`Task Tracker`} showForm={
          () => setShowAddTask(!showAddTask)}
          showAddButton={showAddTask}/>
        
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAddTask={addTask} />}
            {tasks && tasks.length > 0 ? (
                      <Tasks 
                      // tasks={tasks} 
                             onDelete={deleteTask} 
                             toggleReminder={toggleReminder}/>
             ) : ('No Tasks')
            }
          </>
        )} />

        <Route path='/about' component={About} />
        <Footer />
      </div>
      </Router>
      </StoreProvider>
    
  );
}



export default App;