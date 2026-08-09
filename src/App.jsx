import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false)

  const [newTask, setNewTask] = useState({
    title: '',
    category: 'University Assignment',
    dueDate: '',
    priority: 'Medium',
    status: 'Not Started',
  })

  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const response = await fetch('/api/tasks')

        if (!response.ok) {
          throw new Error(`Failed to load tasks: ${response.status}`)
        }

        const data = await response.json()
        setTasks(data)
      } catch (error) {
        console.error('Failed to load tasks:', error)
      }
    }

    loadTasks()
  }, [])


  const handleSaveTask = () => {
    if (!newTask.title.trim()) {
      return
    }

    const task = {
      id: crypto.randomUUID(),
      ...newTask,
    }

    setTasks((currentTasks) => [...currentTasks, task])

    setNewTask({
      title: '',
      category: 'University Assignment',
      dueDate: '',
      priority: 'Medium',
      status: 'Not Started',
    })

    setIsTaskFormOpen(false)
  }

  return (
    <main className="app">
      <header className="app-header">
        <div>
          <p className="eyebrow">University Productivity Hub</p>
          <h1>UniFlow</h1>
          <p className="subtitle">
            Stay on top of your tasks, deadlines, learning, and university life.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setIsTaskFormOpen((current) => !current)}
        >
          {isTaskFormOpen ? 'Close' : '+ Add Task'}
        </button>
      </header>

      {isTaskFormOpen && (
        <section className="task-form-card">
          <h2>Add a New Task</h2>

          <form className="task-form">
            <label>
              Task Title
              <input
                type="text"
                placeholder="e.g. Complete Network Security Assignment"
                value={newTask.title}
                onChange={(event) =>
                  setNewTask({
                    ...newTask,
                    title: event.target.value,
                  })
                }
              />
            </label>

            <label>
              Category
              <select
                value={newTask.category}
                onChange={(event) =>
                  setNewTask({
                    ...newTask,
                    category: event.target.value,
                  })
                }
              >
                <option>University Assignment</option>
                <option>Learning</option>
                <option>Personal Project</option>
                <option>Event</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              Due Date
              <input
                type="date"
                value={newTask.dueDate}
                onChange={(event) =>
                  setNewTask({
                    ...newTask,
                    dueDate: event.target.value,
                  })
                }
              />
            </label>

            <label>
              Priority
              <select
                value={newTask.priority}
                onChange={(event) =>
                  setNewTask({
                    ...newTask,
                    priority: event.target.value,
                  })
                }
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </label>

            <label>
              Status
              <select
                value={newTask.status}
                onChange={(event) =>
                  setNewTask({
                    ...newTask,
                    status: event.target.value,
                  })
                }
              >
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </label>

            <button
              type="button"
              className="primary-button"
              onClick={handleSaveTask}
            >
              Save Task
            </button>
          </form>
        </section>
      )}

      <section className="overview">
        <div className="stat-card">
          <span>Tasks</span>
          <strong>{tasks.length}</strong>
          <small>3 due this week</small>
        </div>

        <div className="stat-card">
          <span>Deadlines</span>
          <strong>3</strong>
          <small>Next 7 days</small>
        </div>

        <div className="stat-card">
          <span>Learning</span>
          <strong>4</strong>
          <small>Active activities</small>
        </div>

        <div className="stat-card">
          <span>Events</span>
          <strong>2</strong>
          <small>Coming up</small>
        </div>
      </section>

      <section className="dashboard-grid">
        <article className="panel">
          <div className="panel-heading">
            <h2>Upcoming Tasks</h2>
            <button className="text-button">View all</button>
          </div>

          {tasks.map((task) => (
            <div className="task" key={task.id}>
              <div>
                <h3>{task.title}</h3>
                <p>
                  {task.category}
                  {task.dueDate && ` • Due ${task.dueDate}`}
                </p>
              </div>

              <span className={`priority ${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
            </div>
          ))}


        </article>

        <article className="panel">
          <div className="panel-heading">
            <h2>Weekly Workload</h2>
          </div>

          <div className="workload">
            <div>
              <span>Mon</span>
              <strong>3 tasks</strong>
            </div>

            <div>
              <span>Tue</span>
              <strong>2 tasks</strong>
            </div>

            <div>
              <span>Wed</span>
              <strong>4 tasks</strong>
            </div>

            <div>
              <span>Thu</span>
              <strong>1 task</strong>
            </div>

            <div>
              <span>Fri</span>
              <strong>2 tasks</strong>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default App