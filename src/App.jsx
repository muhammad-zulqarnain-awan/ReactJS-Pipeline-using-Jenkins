import { useState } from 'react'
import githubLogo from './assets/github.png'
import linkedinLogo from './assets/linkedin.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://linkedin.com/in/zulqarnainawan" target="_blank">
          <img src={linkedinLogo} className="logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/muhammad-zulqarnain-awan" target="_blank">
          <img src={githubLogo} className="logo" alt="GitHub logo" />
        </a>
      </div>
      <h1>Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p></p>
      </div>
      <p className="read-the-docs">DevOps Project</p>
      <p className="read-the-docs">
        Containerize ReactJS app and Push to DockerHub using Jenkins
      </p>
      <br />
      <p>
        <a href="https://github.com/muhammad-zulqarnain-awan/ReactJS-Pipeline-using-Jenkins">
          Click to See the Project Source Code
        </a>
      </p>
      <br /><br />
      <p>Developed By: Muhammad Zulqarnain</p>
    </>
  );
}

export default App
