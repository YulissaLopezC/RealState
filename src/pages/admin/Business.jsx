import React, { useState, useEffect, useRef } from 'react'
import { obtenerHouses, obtenerClientes, crearVenta } from 'utils/api';


const Business = () => {
    const [customer, setCustomer] = useState([]);
    const [houses, setHouses] = useState([]);

    useEffect(()=>{

        const fetchCustomer = async ()=>{
            obtenerClientes(
                (response)=>{
                    setCustomer(response.data)
                    console.log(response.data)
                },
                (error)=>{
                    console.error(error);
                })
        }

        const fetchHouse = async ()=>{
            obtenerHouses(
                (response)=>{
                    setHouses(response.data);
                },
                (error)=>{
                    console.error(error);
                })
        }

        fetchCustomer();
        fetchHouse();


    }, [])

    const formRef = useRef(null); 

    const submitVenta = (e)=>{
        e.preventDefault();
        
        const fd = new FormData(formRef.current);
        const newVenta = {}

        fd.forEach((value, key)=>{
            newVenta[key] = value; 
        })

        const infoVenta = {
            value: newVenta.value,
            user : customer.filter((u)=> u._id === newVenta.user)[0],
            property: houses.filter((h)=> h._id === newVenta.property)[0]
        }

        crearVenta(
            infoVenta, 
            (response)=>{
                console.log(response)
            }, 
            (error)=>{
                console.error(error)
            })
    }

    return (
      <form ref={formRef} onSubmit= {submitVenta} className="flex flex-col w-full items-center pt-6 border-2 border-indigo-400">
            <label className="flex flex-col" htmlFor="user">
              User
              <select defaultValue={-1} name="user" required>
                  <option disabled value={-1}>Select an User</option>
                  {customer.map((cliente)=>{
                      return(
                          <option value={cliente._id}>{`${cliente.document} ${cliente.name}`}</option>
                      )
                  })}
              </select>
            </label>
            <label className="flex flex-col" htmlFor="house">
              House
              <select defaultValue={-1} name="property"  required>
                  <option disabled value={-1}>Select an house</option>
                  {houses.map((house)=>{
                      return(
                          <option value={house._id}>{`${house.name} ${house.adress}`}</option>
                      )
                  })}
              </select>
            </label>

            <label htmlFor="value">
                Value
                <input className="input_style_new" placeholder="Value" name="value" type="number" required/>
            </label>
            
            <button type="submit" className="boton_default self-center">Create</button>
      </form>
    )
}

export default Business
