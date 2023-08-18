import React, {useContext, useEffect} from 'react'
import { AppContext } from '../App'
import { boardDefault } from './Words'


function Letter({letterPosition, attemptVal}) {
    const { board, correctWord, currentAttempt, setDisabledLetter } = useContext(AppContext)

    //current letter in current cell
    const letter = board[attemptVal][letterPosition]

    // returns a boolean if current letter in correctWord is equal to the letter in the cell
    const correct = correctWord[letterPosition] === letter

    //if word is correct and letter is empty and if it includes a letter from the correct word, return true
    const almost = !correct && letter != '' && correctWord.includes(letter)

    //checks if current attempt is greater than maximum attempts allowed and sets conditions for
    //CSS id of letter cell so cell can turn the appropriate color
    const letterState = currentAttempt.attempt > attemptVal &&
    (correct ? 'correct' : almost ? 'almost' : 'error') 

    useEffect(() => {
        if (letter !== '' && !correct && !almost) {
            setDisabledLetter((prev) => [...prev, letter])
        }
    }, [currentAttempt.attempt])
  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter