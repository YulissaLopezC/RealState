import React from 'react'
import { useState, useEffect } from 'react';
import Login from 'pages/Login';


const Navbar = () => {
    const [modal, setModal] = useState(false);
    const Toggle = () =>{
        setModal(!modal);
    }

    useEffect(() => {
        console.log(modal)
    }, [modal])

    return (
        <>
        <nav className="border-2 shadow-lg h-1/5">
            <ul className="list-none flex justify-between w-full h-full items-center px-10 py-4 border-2 ">
                <li className="title_style"><i className="fas fa-home title_style"></i>ouseHold</li>
                    
                        <button className="py-4 px-8 border-2 border-white hover:border-indigo-500"
                        onClick={
                            ()=>Toggle()
                        }>
                            Sing in</button>
                    
            </ul>
        </nav>
        <Login show={modal} close={Toggle}/>
        </>
    )
}

export default Navbar
