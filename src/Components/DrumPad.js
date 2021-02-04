import React from 'react'
import DrumKey from "./DrumKey"
import "../App.css"

import Bass from "../ressources/Bass.wav"
import Chant from "../ressources/Chant.wav"
import Clap from "../ressources/Clap.wav"
import CowBell from "../ressources/CowBell.wav"
import Crash from "../ressources/Crash.wav"
import Hat from "../ressources/Hat.wav"
import Kick from "../ressources/Kick.wav"
import OpenHat from "../ressources/OpenHat.wav"
import Snap from "../ressources/Snap.wav"



const DrumPad = ({ setKeyActive }) => {
    return (
        <div className="DrumPadContainer">
            <DrumKey soundFile={Bass} keyName="Bass" setKeyActive={setKeyActive}>Q</DrumKey>
            <DrumKey soundFile={Chant} keyName="Chant" setKeyActive={setKeyActive}>W</DrumKey>
            <DrumKey soundFile={Clap} keyName="Clap" setKeyActive={setKeyActive}>E</DrumKey>
            <DrumKey soundFile={CowBell} keyName="Cow-Bell" setKeyActive={setKeyActive}>A</DrumKey>
            <DrumKey soundFile={Crash} keyName="Crash" setKeyActive={setKeyActive}>S</DrumKey>
            <DrumKey soundFile={Hat} keyName="Hat" setKeyActive={setKeyActive}>D</DrumKey>
            <DrumKey soundFile={Kick} keyName="Kick" setKeyActive={setKeyActive}>Z</DrumKey>
            <DrumKey soundFile={OpenHat} keyName="Open-Hat" setKeyActive={setKeyActive}>X</DrumKey>
            <DrumKey soundFile={Snap} keyName="Snap" setKeyActive={setKeyActive}>C</DrumKey>
           
        </div>
    )
}

export default DrumPad
