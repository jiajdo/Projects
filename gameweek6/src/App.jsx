import { useState } from 'react'
import './App.css'
import Keyboard from './components/Keyboard'
import Board from './components/Board'
import { boardDefault } from './Words'

function App() {
  
  
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
