import { createContext, useEffect, useState } from 'react'
import './App.css'
import Keyboard from './components/Keyboard'
import Board from './components/Board'
import { boardDefault, generateWordSet } from './components/Words'
import Letter from './components/Letter'

// using createContext hook to share state with Board and Keyboard
export const AppContext = createContext()

function App() {
  //keep track of board state and set default to boardDefault (an empty grid)
  const [board, setBoard] = useState(boardDefault)
  //keep track of letters inputted in the row
  const [currentAttempt, setCurrentAttempt] = useState({ attempt: 0, letterPosition: 0 })
  //keep track of what word is being generated from wordle-bank
  const [wordSet, setWordSet] = useState(new Set())
  //keep track of incorrect letters on page's keyboard
  const [disabledLetter, setDisabledLetter] = useState([])

  const correctWord = 'RIGHT'

  //from generateWordSet func, return a promise that iterates and sets useState to a word generated from wordSet
  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet)
    })
  }, [])

  const onSelectLetter = (keyVal) => {
    //if player enters a 5th letter in the row, exit the function
    if (currentAttempt.letterPosition > 4) return
    //declare newBoard and set it to current state of the board
    const newBoard = [...board]
    //access useState currentAttempt object, get current letter input from keyVal prop, and put it on the board
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyVal
    //update current state of board to include current letter input
    setBoard(newBoard)
    //update current attempt state and move the position of the letter to the next square in the row
    setCurrentAttempt({ ...currentAttempt, letterPosition: currentAttempt.letterPosition + 1 })
  }

  const onDelete = () => {
    //If you're at the first letter, you can't delete. Exit function.
    if (currentAttempt.letterPosition === 0) return
    const newBoard = [...board]
    //On delete, move back the letter position at the current row
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = ''
    setBoard(newBoard)
    //update current attempt state to go back one letter position
    setCurrentAttempt({ ...currentAttempt, letterPosition: currentAttempt.letterPosition - 1 })
  }

  const onEnter = () => {
    //If row is not filled in, exit the function. Can't press ENTER.
    if (currentAttempt.letterPosition !== 5) return

    //loop through currentWord and add letters as they are inputted
    let currentWord = ''
    for (let i=0; i<5; i++){
      currentWord += board[currentAttempt.attempt][i].toLowerCase()
    }

    //if word is in wordle-bank, go to the next row. if not, alert 'word not found' and don't allow the next turn
    if(wordSet.has(currentWord.toLowerCase())) {
      //goes to the next row, at the first letter
      setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPosition: 0 })
    } else {
      alert('Word not found!')
    }
    
    if (currentWord === correctWord){
      alert('You won!')
    }
   
  }
  return (
    <div className='App'>
      <nav>
        <h1>Wordle</h1>
      </nav>
      {/* Wrap Board and Keyboard in AppContext hook*/}
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
          correctWord,
          disabledLetter,
          setDisabledLetter
        }}>
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
