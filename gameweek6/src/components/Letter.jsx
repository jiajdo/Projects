import React, {useContext} from 'react'
import { AppContext } from '../App'
import { boardDefault } from './Words'


function Letter({letterPosition, attemptVal}) {
    //updating the board to the context from Board and Keyboard in App
    const { board } = useContext(AppContext)
    const letter = board[attemptVal][letterPosition]
  return (
    <div className='letter'> </div>
  )
}

export default Letter