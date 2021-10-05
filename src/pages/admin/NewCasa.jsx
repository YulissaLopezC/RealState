import React from 'react';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewCasa = ({showTable, addNewHouseToCard, houseList}) => {

    const [nameP, setNameP] = useState();
    const [adress, setAdress] = useState();
    const [price, setPrice] = useState();
    const [state, setState] = useState();
        
    const guardardatos = () =>{
        toast.success("New House Created");
        showTable(false);
        addNewHouseToCard([...houseList, {
            name: nameP,
            adress: adress,
            price: price,
            state: state,
        } ])
    }

    return (
        <div className=" w-full flex justify-center mt-4">

            <form className="flex flex-col shadow-xl h-full w-1/2 justify-evenly pl-5">
                <h2 className="flex justify-center title_style">New Property</h2>
                <label htmlFor="propertyname" className="flex flex-col h-20 font-semibold text-lg">
                    Propertie's Name
                    <input required className="input_style_new" placeholder="Name of the property" name="propertyname" type="text" 
                    value={nameP}
                    onChange={
                        (e)=>{
                            setNameP(e.target.value); 
                        }
                    } />
                </label>

                <label htmlFor="propertyaddress" className="flex flex-col  h-20 font-semibold text-lg">
                    Propertie's Adress
                    <input required className="input_style_new" placeholder="Where is the property?" name="propertyaddress"  type="text" 
                    value={adress}
                    onChange={(e)=>{
                        setAdress(e.target.value);
                    }}
                    />
                </label>

                <label htmlFor="propertyprice" className="flex flex-col  h-20 font-semibold text-lg">
                    Propertie's Price
                    <input required className="input_style_new" name="propertyprice" type="number" min={0}
                    value={price}
                    onChange={(e)=>{
                        setPrice(e.target.value);
                    }}
                    />
                </label>


                <label htmlFor="propertystate" className="flex flex-col  h-20 font-semibold text-lg">
                    This property is 
                    <select className="input_style_new" name="propertystate" 
                    value={state}
                    onChange ={
                        (e)=>{
                            setState(e.target.value);
                        }
                    }
                    >
                        <option disabled selected> Select an option</option>
                        <option> For Sale</option>
                        <option> For Rent</option>
                    </select>
                </label>
                <button onClick={
                    ()=>{
                      guardardatos();  
                    }
                }
                type="submit" className="boton_default self-center">Create</button>
                <ToastContainer />
            </form>
        </div>
    )
}

export default NewCasa
