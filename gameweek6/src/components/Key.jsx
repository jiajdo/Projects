import React, { useContext } from 'react'
import { AppContext } from '../App'


//Sets conditional logic for bigKeys (Delete, Enter) and letter keys. 
//Set logic
function Key({keyVal, bigKey}) {
    //import board state and attempt state
    const { board, setBoard, currentAttempt, setCurrentAttempt} = useContext(AppContext)
    //selects letter by grabbing keyVal prop from Keyboard and setting it to the new state
    const selectLetter = () => {
        //declare newBoard and set it to current state of the board
        const newBoard = [...board]
        //access useState currentAttempt object, get current letter input from keyVal prop, and put it on the board
        newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyVal
        //update current state of board to include current letter input
        setBoard(newBoard)
        //update current attempt state and move the position of the letter to the next square in the row
        setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1})
    }
  return (
//   use keyVal prop in div and set conditional id for bigKeys to apply CSS conditionally
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
        {keyVal}
    </div>
  )
}

export default Key