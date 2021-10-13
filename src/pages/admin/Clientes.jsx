import React, { useState, useEffect } from 'react'
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';

const Clientes = () =>{
   
    return(
        <div className="border-2 border-blue-300 w-full flex flex-col items-center">
            <h3 className="text-2xl font-bold my-10">Listado de Clientes</h3>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Usuario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <FilaCliente/>
                </tbody>
            </table> 
        </div>
    )
}

const FilaCliente = ()=>{
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        console.log(edit)
    }, [edit])
    return(
        <tr>
            {edit ? (<>
                <td><input className="border-2 border-purple-400 outline-none" type="text" /></td>
                <td><input className="border-2 border-purple-400 outline-none" type="text" /></td>
                <td><input className="border-2 border-purple-400 outline-none" type="text" /></td>
                <td><input className="border-2 border-purple-400 outline-none" type="text" /></td>
            
            </>) 
            : (<>
                <td>Elena</td>
                <td>Elena</td>
                <td>Elena</td>
                <td>Elena</td>
            </>)
            }
           
            <td className="flex justify-around">
                {edit ? 
                    (<>
                        <Tooltip title="Save changes" arrow>
                            <i className="fas fa-check-square text-2xl text-green-300"></i>
                        </Tooltip>

                        <Tooltip title="Cancel" arrow>
                            <i onClick ={()=> setEdit(!edit)}
                            className="fas fa-window-close text-2xl text-red-300"></i>
                        </Tooltip>
                        
                    </>)
                     : (
                    <>
                        <Tooltip title="Edit Client" arrow>
                            <i onClick = {()=> setEdit(!edit)}
                            className="fas fa-pen-square text-2xl text-purple-300"></i>
                        </Tooltip>
                        <Tooltip title="Delete client" arrow>
                            <i onClick ={()=>setOpenDialog(!openDialog)}
                            className="fas fa-trash text-2xl text-purple-300"></i>
                        </Tooltip>
                    </>)}

                <Dialog open={openDialog}>
                    <div className="p-9 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-semibold mb-4">Are you sure to delete this customer?</h3>  
                        <div>
                            <button onClick={()=>console.log("working")}className="bg-green-500 px-4 py-2 hover:bg-green-300 text-white mx-2">Yes</button>
                            <button onClick={()=>setOpenDialog(false)}className="bg-red-500 px-4 py-2 hover:bg-red-300 text-white mx-2">No</button>
                        </div>  
                    </div>
                </Dialog>
            </td>
        </tr>
    )
}
export default Clientes