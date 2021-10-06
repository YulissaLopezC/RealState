import React from 'react'
import '../styles/styles.css'
import { Link } from 'react-router-dom'
import BotonDarkMode from './BotonDarkMode'

const Sidebar = () => {
    return (
        <div className="flex flex-col w-72 items-center pt-6">
            <div className="flex title_style mb-10"><i className="fas fa-home title_style"></i>ouseHold</div>
            <nav className="w-full h-1/4 bg-white mt-3">
                <ul className="flex flex-col items-center w-full h-full">

                    <Link to="/admin">
                    <li className="items_menu">Home</li>
                    </Link>
                    <Link to="/admin/clientes">
                        <li className="items_menu">Customers</li>
                    </Link>
                    <Link to="/admin/casas">
                        <li className="items_menu">Houses</li>
                    </Link>
                </ul>
            </nav>
            
        </div>
    )
}

export default Sidebar
