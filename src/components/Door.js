import React, { useState, useEffect } from 'react'
import door_closed5 from '../assets/door_closed5.jpg'



const Door = () => {
  // const [isLeftDoorSelected, setLeftDoorSelected] = useState(door_closed5)
  // const [isRightDoorSelected, setRightDoorSelected] = useState('')


  // const doorsRight = isRightDoorSelected ? door_open2dr : door_closed5

  return (
    <div className="door_container">
      {/* <button
        onClick={() => setLeftDoorSelected()}
        className="key_button"
      ></button>
      <button
        onClick={() => setRightDoorSelected(door_closed5)}
        className="key_button left"
      ></button> */}

      <img src={door_closed5} className="door_left" alt='door left' />
      {/* <img src={door_closed5} className="door_right" alt='door right'/> */}


    </div>
  )
}
export default Door
