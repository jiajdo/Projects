import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
    const {gameOver, setGameOver, correctWord, currentAttempt} = useContext(AppContext)
  return (
    <div className='gameOver'>
        <h3>
            {gameOver.guessedWord ? 'You won Wordle!': 'You failed!' }
        </h3>
        <h1>
            Correct: {correctWord}
        </h1>
        {gameOver.guessedWord && (<h3> You guessed in {currentAttempt.attempt} attempts</h3>)}
    </div>
  )
}

export default GameOver