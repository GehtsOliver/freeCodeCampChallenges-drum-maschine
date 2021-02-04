import React, { useEffect } from "react";
import "../App.css";


const DrumKey = ({ children, setKeyActive, keyName, soundFile }) => {

  useEffect(() => {
      document.addEventListener("keypress", handleKeyPress, false);
  })

  const playAudio = () => {
    const btn = document.getElementById(children);
    btn.play();
  };

  const handleKeyPress = (e) => {
    if(e.key.toUpperCase() === children){
    playAudio()
    setKeyActive(keyName)
    }
  }

  return (
    <button
      id={keyName}
      onKeyPress={handleKeyPress}
      onClick={() => {
        setKeyActive(keyName); playAudio();
      }}
      className="drum-pad"
    >
      {children}
      <audio
        preload="auto"
        src={soundFile}
        className="clip"
        id={children}
      />
    </button>
  );
};

export default DrumKey;
