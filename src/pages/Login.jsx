import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

const Login = () => {
    const [mostrarInicio, setMostrarInicio] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Login");
    const [colorBoton, setColorBoton] = useState("indigo");

    useEffect(()=>{
        if(mostrarInicio){
            setTextoBoton("Go to Register");
            setColorBoton("indigo")
        }else{
            setTextoBoton("Back to Login");
            setColorBoton("gray")
        }
    }, [mostrarInicio])

    return (
        <div className="borde shadow-2xl block-cont-authen">
            <div className="flex flex-col w-full justify-center">
                <Link to="/">
                <i class="fas fa-arrow-alt-circle-left ml-4 text-lg"></i>
                </Link>   
                <h3 className="text_style_1">Welcome to HouseLand</h3>
            </div>
            <div className="flex w-11/12  pt-6 border-b-2 border-indigo-400 ">
            <button onClick = {()=>{
                setMostrarInicio(!mostrarInicio);
            }} 
            type="button" className={`hover:text-indigo-400 bg-${colorBoton}-200 p-5`}>{textoBoton}</button>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
            {mostrarInicio ? <Inicio/>: <Registro/>}
            </div>
            
        </div>
    );    
}

const Inicio = () =>{
    return(
        <>
            <form className="border-b-2 border-indigo-400 w-11/12 py-5 flex flex-col">
                <label className="mb-3">Email</label>
                <input className="block_input" type="email" placeholder="YourEmail@mail.com"/>
                <label className="mb-3">Password</label>
                <input className="block_input" type="password"/>
                <div>
                    <Link to="/admin">
                    <button className="borde mt-8 bg-indigo-400 hover:bg-indigo-700 boton_style">Login</button>
                    </Link>
                    <h2 className="text-center mt-4 capitalize font-bold text-indigo-400 hover:text-indigo-600 hover:underline">forgot your password?</h2>
                </div>
            </form>

            <div className=" w-11/12 flex flex-col items-center mt-6">
                <h3 className="mb-2">Or connect with: </h3>
                <button className="mb-4 bg-blue-600 hover:bg-white hover:text-blue-600 border-2 border-blue-600 boton_style"> <i className="fab fa-facebook mr-10 text-lg"></i>Continue with facebook</button>
                <button className="mb-4 boton_style_google"><i className="fab fa-google mr-10 text-lg"></i>continue with google</button>

            </div>
        </>
    );
}

const Registro = () =>{
    return(
        <>
            <form className="border-b-2 border-indigo-400 w-11/12 py-5 flex flex-col">
                <label className="mb-3">Email</label>
                <input className="block_input" type="email" placeholder="YourEmail@mail.com"/>
                <label className="mb-3">Password</label>
                <input className="block_input" type="password"/>
                <label className="mb-3">Name</label>
                <input className="block_input" type="text"/>
                <div>
                    <Link to="/admin">
                    <button className="borde mt-8 bg-indigo-400 hover:bg-indigo-700 boton_style">Register</button>
                    </Link>
                </div>
            </form>

            <div className=" w-11/12 flex flex-col items-center mt-6">
                <h3 className="mb-2">Or connect with: </h3>
                <button className="mb-4 bg-blue-600 hover:bg-white hover:text-blue-600 border-2 border-blue-600 boton_style"> <i className="fab fa-facebook mr-10 text-lg"></i>Continue with facebook</button>
                <button className="mb-4 boton_style_google"><i className="fab fa-google mr-10 text-lg"></i>continue with google</button>
            </div>
        </>
    );
}

export default Login
