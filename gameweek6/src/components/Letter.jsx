import React, {useContext} from 'react'
import { AppContext } from '../App'


function Letter({letterPosition, attemptVal}) {
    const { board } = useContext(AppContext)
  return (
    <div className='letter'>Letter</div>
  )
}

export default Letter