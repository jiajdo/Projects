import React from 'react'

function Letter({letterPosition, attemptVal}) {
    const letter = board[attemptVal][letterPosition]
  return (
    <div className='letter'>{letter}</div>
  )
}

export default Letter