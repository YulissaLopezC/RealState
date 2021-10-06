import { useDarkMode } from 'context/DarkMode'
import React from 'react'

const BotonDarkMode = () => {
    const {darkMode, setDarkMode} = useDarkMode();
   
    return (
        <button onClick={()=>{
            setDarkMode(!darkMode)
        }}>
          Dark Mode {darkMode ? "Off" : "ON"} 
        </button>
    )
}

export default BotonDarkMode
