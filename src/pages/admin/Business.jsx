import React, { useState, useEffect } from 'react'
import { obtenerClientes } from 'utils/api';

const Business = () => {
    const [customer, setCustomer] = useState([]);

    useEffect(()=>{
        obtenerClientes(
            (response)=>{
                setCustomer(response.data)
                console.log(response.data)
            },
            (error)=>{
                console.error(error);
            })
    }, [])
    return (
      <form className="flex flex-col w-full items-center pt-6 border-2 border-indigo-400">
            <label className="flex flex-col" htmlFor="user">
              User
              <select defaultValue={-1}>
                  <option disabled value={-1}>Select an User</option>
                  {customer.map((cliente)=>{
                      return(
                          <option>{`${cliente.document} ${cliente.name}`}</option>
                      )
                  })}
              </select>
            </label>
      </form>
    )
}

export default Business
