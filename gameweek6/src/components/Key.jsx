import React, { useContext } from 'react'
import { AppContext } from '../App'

//Sets conditional logic for bigKeys (Delete, Enter) and letter keys. 
//Set logic for updating the board as you play
function Key({ keyVal, bigKey, disabled }) {
    const { onSelectLetter, onDelete, onEnter  } = useContext(AppContext)

    //Grabs functions from App and sets conditions for pressing Enter, Delete, or keyboard letters
    const selectLetter = () => {
        if (keyVal === 'ENTER') {
            onEnter()
        } else if (keyVal === "DELETE") {
            onDelete()
        } else {
            onSelectLetter(keyVal)
        }
    }
    return (
        //   use keyVal prop in div and set conditional id for bigKeys to apply CSS conditionally
        <div className="key" id={bigKey ? "big": (disabled ? 'disabled' : null)} onClick={selectLetter}>
            {keyVal}
        </div>
    )
}

export default Key