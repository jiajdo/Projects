import React, { useContext, useCallback, useEffect } from 'react'
import Key from './Key';
import { AppContext } from '../App';


function Keyboard() {
    const { onEnter, onDelete, onSelectLetter } = useContext(AppContext)

    //set up each keyboard row as an array
    const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

    //setting up functionality for using physical keyboard
    //useCallback hook to cache keydown results
    const handleKeyboard = useCallback((e) => {
        if (e.key === 'Enter') {
            onEnter()

        } else if (e.key === 'Backspace') {
            onDelete()
        } else {
            keys1.forEach((key) => {
                if (e.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key)
                }
            })
        }
        {
            keys2.forEach((key) => {
                if (e.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key)
                }
            })
        }
        {
            keys3.forEach((key) => {
              if (e.key.toLowerCase() === key.toLowerCase()){
                  onSelectLetter(key)
              }
            })
          }
    })

    //useEffect hook that triggers on keydown event and renders page again for every keydown
    useEffect(() => {
        document.addEventListener('keydown', handleKeyboard)
        return () => {
            document.removeEventListener('keydown', handleKeyboard)
        }
    }, [handleKeyboard])

    return (
        <div className='keyboard' onKeyDown={handleKeyboard}>
            {/*map through keys and make each row a div so it will be displayed like a keyboard*/}
            {/* return Key component and pass keyVal prop with each iteration */}
            <div className='line1'>
                {keys1.map((key) => {
                    return <Key keyVal={key} />
                })}
            </div>
            <div className='line2'>
                {keys2.map((key) => {
                    return <Key keyVal={key} />
                })}
            </div>
            <div className='line3'>
                <Key keyVal={'ENTER'} bigKey />
                {keys3.map((key) => {
                    return <Key keyVal={key} />
                })}
                <Key keyVal={'DELETE'} bigKey />
            </div>
        </div>
    )
}

export default Keyboard 