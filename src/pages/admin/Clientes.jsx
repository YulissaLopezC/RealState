import { useDarkMode } from 'context/DarkMode'
import React from 'react'

const Clientes = () =>{
    const {darkMode} = useDarkMode();
    return(
        <div className={`bg-${darkMode ? "black" : "white"}`}>Panel de comtrol clientes / admi</div>
    )
}

export default Clientes