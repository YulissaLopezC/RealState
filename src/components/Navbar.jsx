import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="border-2 shadow-lg h-1/5">
            <ul className="list-none flex justify-between w-full h-full items-center px-10 py-4 border-2 ">
                <li className="title_style"><i className="fas fa-home title_style"></i>ouseHold</li>
                    <Link to="/login">
                        <li className="py-4 px-8 border-2 border-white hover:border-indigo-500">Sing in</li>
                    </Link>
            </ul>
        </nav>
    )
}

export default Navbar
