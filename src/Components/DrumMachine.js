import React, { useState } from 'react'
import DrumPad from "./DrumPad"
import Display from "./Display"


const DrumMachine = () => {

    const[keyActive, setKeyActive] = useState("")


    return (
        <div id="drum-machine" className="DrumMachine">
              <Display keyActive={keyActive} />
              <DrumPad setKeyActive={setKeyActive}/>
        </div>
    )
}

export default DrumMachine
