import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <nav>
        <h1>Wordle</h1>
      </nav>
      <Board />
      <Keyboard />
    </div>
  )
}

export default App
