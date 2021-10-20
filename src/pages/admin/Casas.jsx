import React, { useState } from 'react'
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
import { toast } from 'react-toastify';

const Casas = () => {
    const {darkMode} = useDarkMode();
    const [houses, setHouse] = useState([]);
    const [showform, setShowForm] = useState(false);
    const [botontext, setBotonText] = useState("Add New Property");
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true)

    useEffect(()=>{

        const obtenerHouses = ()=>{
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
        }

        if (ejecutarConsulta){
            obtenerHouses();
            setEjecutarConsulta(false);
        }

    }, [ejecutarConsulta])


    useEffect(()=>{
        if(showform){
            setBotonText("Show all the properties");
        }else{
            setBotonText("Add New property");
        }
    }, [showform])


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
                    }}
                    className="boton_default">{botontext}</button>
            </div>

            <section className="w-full h-full flex flex-col justify-center">
                {showform ? (<NewCasa showTable = {setShowForm} addNewHouseToCard = {setHouse} houseList = {houses} ejecutarConsulta={setEjecutarConsulta}/>)
                : (<Tabla listHouse={houses} setEjecutarConsulta={setEjecutarConsulta}/>) }
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

const Tabla = ({listHouse, setEjecutarConsulta})=>{
    const [busqueda, setBusqueda] = useState('')
    const [casaFiltrada, setCasaFiltrada] = useState(listHouse)
    console.log("lista:", listHouse);
    //busqueda
    useEffect(()=>{
        //console.log("lista:", listHouse);
        
        setCasaFiltrada(listHouse.filter((elemento)=>{
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
        )
        
    }, [busqueda, listHouse])

    return(
        <div className="w-full">    
            <input value={busqueda} onChange={(e)=>setBusqueda(e.target.value)}
            className="border-2 border-indigo-400 outline-none my-6 w-1/5 h-10 rounded-md pl-2" placeholder="Search House" type="text"  />       
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
                            casaFiltrada.map((house)=>{
                                return(
                                    <FilaTabla key={nanoid} house={house} ejecutarConsulta={setEjecutarConsulta}/>
                                )
                            })
                        }
                    </tbody>
                </table>
       </div>
    )    
}

const FilaTabla = ({house, ejecutarConsulta}) =>{

    const[edit, setEdit] = useState(false);
    const[confirmarCambios, setConfirmarCambios] = useState(false);
    const[eliminarItem, setEliminarItem] = useState(false);
    const[infoHouse, setInfoHouse] = useState({
        name: house.name,
        adress: house.adress,
        price: house.price,
        state: house.state
    })

    const updateHouse = async()=>{
        const options = {
            method: 'PATCH',
            url: `http://localhost:5000/casas/${house._id}`,
            headers: {'Content-Type': 'application/json'},
            data: {...infoHouse}
          };
          
          await axios
          .request(options)
          .then(function (response) {
            console.log(response.data);
            toast.success("The data was updated")
            setEdit(false)
          }).catch(function (error) {
            console.error(error);
            toast.success("Error while updating the data")
          });
        setConfirmarCambios(false);
        ejecutarConsulta(true);
    }

    const deleteItem = async()=>{
        const options = {
            method: 'DELETE',
            url: `http://localhost:5000/casas/${house._id}`,
            headers: {'Content-Type': 'application/json'},
            data: {id: house._id}
          };
          
          await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success("The house was deleted")
          }).catch(function (error) {
            console.error(error);
            toast.error("Error Deleting the house")
          });

          setEliminarItem(false);
          ejecutarConsulta(true);
    }

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
                <td><input className="border-2 border-purple-400 outline-none" type="text" Value={infoHouse.name} 
                onChange={(e)=>setInfoHouse({...infoHouse, name: e.target.value})}/></td>
                <td><input className="border-2 border-purple-400 outline-none" type="text" Value={infoHouse.adress}
                onChange={(e)=>setInfoHouse({...infoHouse, adress: e.target.value})}/></td>
                <td><input className="border-2 border-purple-400 outline-none" type="text" Value={infoHouse.price}
                onChange={(e)=>setInfoHouse({...infoHouse, price: e.target.value})} /></td>
                <td>
                    <select className="border-2 border-purple-400" name="state" Value={infoHouse.state}
                    onChange={(e)=>setInfoHouse({...infoHouse, state: e.target.value})} >
                        <option value={0} disabled> Select an option</option>
                        <option> For Sale</option>
                        <option> For Rent</option>
                    </select>
                </td>
                <td className="flex justify-around">
                    <Tooltip title="Save Changes" arrow>
                        <i onClick={()=>{
                            setConfirmarCambios(!confirmarCambios);
                        }}
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
                            <button onClick={()=>updateHouse()}
                            
                            className="bg-green-500 px-4 py-2 hover:bg-green-300 text-white mx-2">Yes</button>
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
                            <i onClick= {()=>setEdit(!edit)} className="fas fa-pen-square text-2xl text-purple-300"></i>
                        </Tooltip>
                        <Tooltip title="Delete Property" arrow>
                            <i onClick={()=>setEliminarItem(!eliminarItem)} className="fas fa-trash text-2xl text-purple-300"></i>
                        </Tooltip>
                        <Dialog open={eliminarItem}>
                            <div className="p-9 flex flex-col justify-center items-center">
                                <h3 className="text-xl font-semibold mb-4">Are you sure to Delete this property?</h3>  
                                <div>
                                    <button onClick={()=>deleteItem()}className="bg-green-500 px-4 py-2 hover:bg-green-300 text-white mx-2">Yes</button>
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
