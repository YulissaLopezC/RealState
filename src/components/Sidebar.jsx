import React from 'react'
import '../styles/styles.css'
import { Link, } from 'react-router-dom'
import useActiveRoute from 'hooks/useActiveRoute'



const Sidebar = () => {
    return (
        <div className="flex flex-col w-72 items-center pt-6">
            <Link to="/admin">
                <div className="flex title_style mb-10"><i className="fas fa-home title_style"></i>ouseHold</div>
            </Link>
            <nav className="w-full h-1/4 bg-white mt-3">
                <ul className="flex flex-col items-center w-full h-full">
                    <Ruta ruta="/admin/perfil" nombre="perfil"/>
                    <Ruta ruta="/admin/clientes" nombre="Customer"/>
                    <Ruta ruta="/admin/casas" nombre="Houses"/>
                    <Ruta ruta="/index" nombre="Cerrar Sesion" />
                </ul>
            </nav>
            
        </div>
    )
}

const Ruta = ({ruta, nombre}) =>{

    const isActive = useActiveRoute(ruta);

    return(
    <Link to={ruta}>
        <li className={`items_menu bg-${isActive ? "indigo-400" : "transparent"}`}>{nombre}</li>
    </Link>
    )
}

export default Sidebar
