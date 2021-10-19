import React, { useState, useRef } from 'react'
import {useEffect} from 'react'
import prueba from 'media/card1.png'
import NewCasa from './NewCasa'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import BotonDarkMode from 'components/BotonDarkMode';
import { useDarkMode } from 'context/DarkMode';
import { nanoid } from 'nanoid';
import Tooltip from '@mui/material/Tooltip';
import  Dialog  from '@mui/material/Dialog';
import axios from "axios";

const Casas = () => {
    const {darkMode} = useDarkMode();
    const [houses, setHouse] = useState([]);
    const [showform, setShowForm] = useState(false);
    const [botontext, setBotonText] = useState("Add New Property");


    useEffect(()=>{
        if(showform){
            setBotonText("Show all the properties");
        }else{
            setBotonText("Add New property");
        }
    }, [showform])


    useEffect(()=>{
        const options = {method: 'GET', url: 'http://localhost:5000/casas'};

        axios
        .request(options)
        .then(function (response) {
        setHouse(response.data)
        }).catch(function (error) {
        console.error(error);
        });
        setHouse([]);

        setShowForm(false)
    },[])


    return (
        <div className={`flex flex-col w-full items-center p-9 bg-${darkMode ? "black" : "white"}`}>
            <div className={`border-2 flex justify-between w-11/12 p-10 text-${darkMode ? "white" : "black"}`}>
                <div className="flex flex-col">
                <BotonDarkMode/>
                <h2 className="text-2xl font-semibold">Welcome</h2>
                <h2 className="text-xl font-semibold">this are the house available for sale or rent</h2>
                </div>
                    <button onClick ={
                    ()=>{
                        setShowForm(!showform)
                        console.log("showform =", showform)
                    }}
                    className="boton_default">{botontext}</button>
            </div>

            <section className="w-full h-full flex flex-wrap justify-center">
                {showform ? (<NewCasa showTable = {setShowForm} addNewHouseToCard = {setHouse} houseList = {houses}/>)
                : (<Tabla listHouse={houses}/>) }
            <ToastContainer />  
            </section>
        </div>
    );
}

const CardHouses = ({houseList}) =>{
    const {darkMode} = useDarkMode();
    useEffect(()=>{
        console.log(houseList);
    },[houseList])
    
    return(
        houseList.map((house)=>{
            return(
                <div key={nanoid} className="border-2 flex flex-col w-64 h-74 items-center my-2 mx-4 shadow-lg">
                    <img className="w-10/12 h-auto" src={prueba} alt="imagen"/>
                    <h2 className={`${darkMode ? "darkMode" : "lightMode"} capitalize font-semibold text-lg`}>{house.name}</h2>
                    <div className={`${darkMode ? "darkMode" : "lightMode"} flex flex-wrap items-center justify-center w-full`}>
                        <p className="font-bold capitalize text-sm px-1">{house.state}</p>
                        <p className="font-light text-sm px-1">{house.adress}</p>
                        <p className="font-light text-sm px-1">{house.price} USD</p>
                    </div>
                    <button className="boton_card" type="button">See More</button>
                </div>
            )
        })
    );
}

const Tabla = ({listHouse})=>{

    const form = useRef(null);

    const submitEdit = (e)=>{
        e.preventDefault();
        console.log(e);
    }

    return(
        <div className="w-full mt-5">
            <form ref={form} onSubmit={submitEdit}>
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Adress</th>
                            <th>Price</th>
                            <th>State</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listHouse.map((house)=>{
                                return(
                                    <FilaTabla key={nanoid} house={house}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </form>
       </div>
    )    
}

const FilaTabla = ({house}) =>{

    const[edit, setEdit] = useState(false);
    const[confirmarCambios, setConfirmarCambios] = useState(false);
    const[eliminarItem, setEliminarItem] = useState(false);

    useEffect(()=>{
        console.log(edit)
    }, [edit])

    useEffect(()=>{
        console.log(house);
    }, [house])


    return(
        <>
            {edit ? 
            (
                <tr>
                <td><input className="border-2 border-purple-400 outline-none" type="text" defaultValue={house.name}/></td>
                <td><input className="border-2 border-purple-400 outline-none" type="text" defaultValue={house.adress}/></td>
                <td><input className="border-2 border-purple-400 outline-none" type="text" defaultValue={house.price}/></td>
                <td><input className="border-2 border-purple-400 outline-none" type="text" defaultValue={house.state}/></td>
                <td className="flex justify-around">
                    <Tooltip title="Save Changes" arrow>
                        <i onClick={()=>{setConfirmarCambios(!confirmarCambios);}}
                        className="fas fa-check-square text-2xl text-green-300"></i>
                    </Tooltip>
                    <Tooltip title="Cancel" arrow>
                        <i onClick={()=>setEdit(!edit)}
                        className="fas fa-window-close text-2xl text-red-300"></i>
                    </Tooltip>
                </td>
                <Dialog open={confirmarCambios}>
                        <div className="p-9 flex flex-col justify-center items-center">
                            <h3 className="text-xl font-semibold mb-4">Are you sure to Save the changes?</h3>  
                            <div>
                            <button onClick={()=>console.log("working")}className="bg-green-500 px-4 py-2 hover:bg-green-300 text-white mx-2">Yes</button>
                            <button onClick={()=>setConfirmarCambios(false)}className="bg-red-500 px-4 py-2 hover:bg-red-300 text-white mx-2">No</button>
                        </div>  
                    </div>
                </Dialog>
            </tr>
            )
            :
            ( 
                <tr>
                    <td>{house.name}</td>
                    <td>{house.adress}</td>
                    <td>{house.price}</td>
                    <td>{house.state}</td>
                    <td className="flex justify-around">
                        <Tooltip title="Edit Property" arrow>
                            <i onClick= {()=>setEdit(!edit)}
                                                className="fas fa-pen-square text-2xl text-purple-300"></i>
                        </Tooltip>
                        <Tooltip title="Delete Property" arrow>
                            <i onClick={()=>setEliminarItem(!eliminarItem)}
                                                className="fas fa-trash text-2xl text-purple-300"></i>
                        </Tooltip>
                        <Dialog open={eliminarItem}>
                            <div className="p-9 flex flex-col justify-center items-center">
                                <h3 className="text-xl font-semibold mb-4">Are you sure to Delete this property?</h3>  
                                <div>
                                    <button onClick={()=>console.log("working")}className="bg-green-500 px-4 py-2 hover:bg-green-300 text-white mx-2">Yes</button>
                                    <button onClick={()=>setEliminarItem(false)}className="bg-red-500 px-4 py-2 hover:bg-red-300 text-white mx-2">No</button>
                                </div>  
                            </div>
                        </Dialog>
                    </td>
                </tr>       
                ) 
            }
        </>
    );
}

export default Casas
