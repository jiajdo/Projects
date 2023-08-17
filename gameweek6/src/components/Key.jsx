import React from 'react'

//Key component sets conditional logic for bigKeys (Delete, Enter) and letter keys
function Key({keyVal, bigKey}) {
  return (
//   use keyVal prop in div and set conditional id for bigKeys to apply CSS conditionally
    <div className="key" id={bigKey && "big"}>{keyVal}</div>
  )
}

export default Key