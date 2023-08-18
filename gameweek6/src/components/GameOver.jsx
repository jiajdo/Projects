import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
    const {
        gameOver, 
        correctWord, 
        currentAttempt, 
    } = useContext(AppContext)
  return (
    <div className='gameOver'>
        <h3>
            {gameOver.guessedWord ? 'You won Wordle!': 'You failed!' }
        </h3>
        <h1>
            Correct word is: {correctWord.toUpperCase()}
        </h1>
        {gameOver.guessedWord && (<h3> You guessed in {currentAttempt.attempt} attempt(s)</h3>)}
    </div>
  )
}

export default GameOver