import React, { useState, useEffect } from 'react'
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import FormularioCreaacion from 'components/FormularioCreaacion';
import axios from "axios";
import { obtenerClientes } from 'utils/api';

const Clientes = () =>{
    const [showForm, setShowForm] = useState(false);
    const [botonText, setBotonText] = useState("Add New Customer");
    const [customer, setCustomer] = useState([])
    
    useEffect(()=>{
        if(showForm === false){
            
            /* const obtenerCustomer = () =>{
    
                const options = {method: 'GET', url: 'http://localhost:5000/customer'};
    
                axios
                .request(options)
                .then(function (response) {
                    console.log(response.data)
                    setCustomer(response.data)
                  }).catch(function (error) {
                    console.error(error);
                  });
    
                  setShowForm(false)
    
            } */
    
            obtenerClientes(
                (response)=>{
                    console.log(response.data)
                    setCustomer(response.data)  
                },
                (error)=>{
                    console.error(error);
                }
            );
        }
    }, [showForm])


    useEffect(()=>{
        if(showForm){
            setBotonText("Show all Customer")
        }else{
            setBotonText("Add New User")
        }
    }, [showForm])

    return(
        <div className="border-2 border-blue-300 w-full flex flex-col items-center">
            <button onClick = {
                ()=>{
                    setShowForm(!showForm);
                }
            } className="boton_default self-end"> {botonText}
            </button>

            <section className="w-full h-full flex flex-col ">
                {showForm ? (<FormularioCreaacion/>) : <Tabla listaClientes ={customer}/>}
            </section>
        </div>
    )
}

const Tabla = ({listaClientes}) =>{
    const [edit, setEdit] = useState(false)

    useEffect(()=>{
        console.log("tabla", listaClientes)
    },[listaClientes])
    
    return(
        <div className="w-full">
        <h3 className="text-2xl font-bold my-10">Listado de Clientes</h3>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Documento</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaClientes.map((cliente)=>{
                            return(
                                <FilaCliente listacliente={cliente}/>
                            )
                        })
                    }
                </tbody>
            </table> 
        </div>
    )
}

const FilaCliente = ({listacliente})=>{
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        console.log(edit)
    }, [edit])
    return(
        <>
            {edit ? (<>
                <td><input className="border-2 border-purple-400 outline-none" type="text" defaultValue={listacliente.name} /></td>
                <td><input className="border-2 border-purple-400 outline-none" type="text" defaultValue={listacliente.document}/></td>
                <td><input className="border-2 border-purple-400 outline-none" type="text" defaultValue={listacliente.email}/></td>
                <td>
                    <div className="flex justify-around">
                        <Tooltip title="Save changes" arrow>
                            <i className="fas fa-check-square text-2xl text-green-300"></i>
                        </Tooltip>

                        <Tooltip title="Cancel" arrow>
                            <i onClick ={()=> setEdit(!edit)}
                            className="fas fa-window-close text-2xl text-red-300"></i>
                        </Tooltip>
                    </div>
                </td>
            
            </>) 
            : (<tr>
                <td>{listacliente.name}</td>
                <td>{listacliente.document}</td>
                <td>{listacliente.email}</td>
                <td>
                    <div className="flex justify-around">
                        <Tooltip title="Edit Client" arrow>
                            <i onClick = {()=> setEdit(!edit)}
                            className="fas fa-pen-square text-2xl text-purple-300"></i>
                        </Tooltip>
                        <Tooltip title="Delete client" arrow>
                            <i onClick ={()=>setOpenDialog(!openDialog)}
                            className="fas fa-trash text-2xl text-purple-300"></i>
                        </Tooltip>
                    </div>
                </td>
            </tr>)
            }
            
            <Dialog open={openDialog}>
                <div className="p-9 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-semibold mb-4">Are you sure to delete this customer?</h3>  
                    <div>
                        <button onClick={()=>console.log("working")}className="bg-green-500 px-4 py-2 hover:bg-green-300 text-white mx-2">Yes</button>
                        <button onClick={()=>setOpenDialog(false)}className="bg-red-500 px-4 py-2 hover:bg-red-300 text-white mx-2">No</button>
                    </div>  
                </div>
            </Dialog>
            
        </>
    )
}
export default Clientes