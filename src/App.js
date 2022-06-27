import { useState } from "react"
import Task from './Task'
import './styles.css'
function App() {

  const [tasks, setTasks] = useState(
    [{
      name: 'this is the first task',
      isDone: false
    }
    ])
  const [form, setForm] = useState('')



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
  }

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
    console.log("modified")
    setForm(tasks[index].name)
    deleteTask(index)
  }

  return (
    <div className='container'>
      <div className="todos">Todos ({tasks.filter(task => !task.isDone).length})</div>
      <form className="form" onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Enter a task"
          name="form"
          value={form}
          onChange={(e) => setForm(e.target.value)}
        />
        <button >Add Task</button>
      </form>

      <div className="tasks">
        {tasks.map((task, index) => {
          return <Task
            infos={task}
            handleDone={() => taskDone(index)}
            handleDelete={() => deleteTask(index)}
            handleModify={() => modifyTask(index)}
          />
        })}
      </div>
    </div>
  );
}

export default App;
