import React from 'react'
import "../App.css"

const Display = ({ keyActive }) => {
    return (
        <div style={{
            height: "35%"
        }} >
           <div style={{
               height: "60px",
               width: "120px",
               backgroundColor: "#C4C4C4",
               position: 'relative',
               top: "3rem",
               left: "1.5rem",
               borderRadius: "2rem",
               textAlign:"center"
           }}id="display">
               <span style={{
                   position: "relative",
                   top: "1rem"
               }}>{keyActive}</span></div> 
           <h2 style={{
               position: "relative",
               left: "10rem",
               bottom: "3rem",
               color:"white",
               fontSize: "1.3rem"
           }}>© Maschine</h2>
        </div>
    )
}

export default Display
