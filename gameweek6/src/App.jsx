import { createContext, useState } from 'react'
import './App.css'
import Keyboard from './components/Keyboard'
import Board from './components/Board'
import {boardDefault} from './components/Words'
import Letter from './components/Letter'

// using createContext hook to share state with Board and Keyboard
export const AppContext = createContext()

function App() {
  //keep track of board state and set default to boardDefault (an empty grid)
  const [board, setBoard] = useState(boardDefault)
  //keep track of letters inputted in the row
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0})
  return (
    <div className='App'>
      <nav>
        <h1>Wordle</h1>
      </nav>
      {/* Wrap Board and Keyboard in AppContext hook*/}
      <AppContext.Provider value={{board, setBoard, currentAttempt, setCurrentAttempt}}>
      {/*Wrap board and keyboard in div and apply css class rules to center it */}
      <div className='game'>
        <Board />
        <Keyboard />
      </div>
      </AppContext.Provider>
    </div>
  )
}

export default App
