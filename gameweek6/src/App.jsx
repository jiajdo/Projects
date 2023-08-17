import { useState } from 'react'
import './App.css'
import Keyboard from './components/Keyboard'
import Board from './components/Board'
import { boardDefault } from './components/Words'
import Letter from './components/Letter'
import { createContext } from 'react'

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(boardDefault);
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
