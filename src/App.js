import { useEffect, useState, useRef } from "react"
import Task from './Task'
import './styles.css'

function App() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) ||
    [{
      name: 'this is the first task',
      isDone: false
    }
    ])
  const [form, setForm] = useState('')
  const input = useRef()

  //this state is to toggle the add Task button
  const [button, setButton] = useState(true)

  function handleSubmit(e) {
    e.preventDefault()
    form && setTasks(prev => {
      return [
        ...prev,
        {
          name: form,
          isDOne: false
        }
      ]
    })
    setForm('')
    setButton(true)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function taskDone(index) {
    const newTasks = [...tasks]
    newTasks[index].isDone = true
    setTasks(newTasks)
  }
  function deleteTask(index) {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  function modifyTask(index) {
    input.current.focus()
    setButton(false)
    setForm(tasks[index].name)
    deleteTask(index)
  }
  function clearAllTasks() {
    setTasks([])
  }

  return (
    <div className='container'>
      <div className="todos">Todos ({tasks.filter(task => !task.isDone).length})</div>
      <form className="form" onSubmit={handleSubmit} >
        <input
          ref={input}
          type="text"
          placeholder="Enter a task"
          name="form"
          value={form}
          onChange={(e) => setForm(e.target.value)}
        />
        <button >{button ? 'Add Task' : 'Edit'}</button>
      </form>
      <div className="tasks">
        {tasks.map((task, index) => {
          return <Task
            {...task}
            handleDone={() => taskDone(index)}
            handleDelete={() => deleteTask(index)}
            handleModify={() => modifyTask(index)}
          />
        })}
      </div>
      <div className="clear-btn">
        {tasks.length > 0 && <button onClick={clearAllTasks} >Clear All</button>}
      </div>
    </div>
  );
}

export default App;
