import React, { useState } from 'react'
import Button from '../../Button/Button'
import EditorPopup from './EditorPopup'

export default function EditorBtn() {
    const[popup,setPopup]=useState(false)
  return (
    <div>
        <Button text="Pop Up" variant="solidOrange" width="auto" onClick={()=>setPopup(true)}></Button>
        {popup && <EditorPopup closePopup={setPopup}/>}
    </div>
  )
}

