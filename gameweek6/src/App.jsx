import { createContext, useState } from 'react'
import './App.css'
import Keyboard from './components/Keyboard'
import Board from './components/Board'
import {boardDefault} from './components/Words'
import Letter from './components/Letter'

// using createContext hook to share state with Board and Keyboard
export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(boardDefault)
  return (
    <div className='App'>
      <nav>
        <h1>Wordle</h1>
      </nav>
      {/* Wrap Board and Keyboard in AppContext hook to supply context to them */}
      <AppContext.Provider value={{board, setBoard}}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  )
}

export default App
