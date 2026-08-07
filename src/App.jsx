import './App.css'

function App() {
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

        <button className="primary-button">+ Add Task</button>
      </header>

      <section className="overview">
        <div className="stat-card">
          <span>Tasks</span>
          <strong>6</strong>
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

          <div className="task">
            <div>
              <h3>Network Security Assignment</h3>
              <p>University Assignment</p>
            </div>

            <span className="priority high">High</span>
          </div>

          <div className="task">
            <div>
              <h3>Azure Learning Module</h3>
              <p>Learning</p>
            </div>

            <span className="priority medium">Medium</span>
          </div>

          <div className="task">
            <div>
              <h3>Project Documentation</h3>
              <p>Personal Project</p>
            </div>

            <span className="priority low">Low</span>
          </div>
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