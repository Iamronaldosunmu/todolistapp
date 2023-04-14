import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  
  const onAddTask = () => {
    setTasks([...tasks, {
      text: inputValue, 
      id: tasks.length, 
      isBeingEdited: false
    }])
    setInputValue("");
    console.log(tasks);
  }

  const onDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const onEditButtonClick = (id) => {
    setTasks(tasks.map(task => task.id == id ? { ...task, isBeingEdited: true } : { ...task }));
    console.log(tasks)
  }

  const onEdit = (id, value) => {
    setTasks(tasks.map(task => task.id == id ? { ...task, text: value, isBeingEdited: false } : { ...task }));
  }



  return (
    <main className='pageContainer'>
      <section className='todoListSection'>
        <h1 className='header'>Get Things Done</h1>
        <section className='pageContent'>
        <div className="inputGroup">
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder='What is the task today?' />
            <button onClick={onAddTask} className='taskButton'>Add Task</button>
          </div>
          
          <section className="taskSection">
            {
              tasks.map(task => <Task isBeingEdited={task.isBeingEdited} onEdit={onEdit} onEditButtonClick={onEditButtonClick} onDeleteTask={onDeleteTask} id={task.id} text={task.text} />)
          }
          </section>

        </section>
      </section>
    </main>
  )
}

export default App
