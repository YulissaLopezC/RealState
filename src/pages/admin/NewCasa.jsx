import React from 'react';
import { useRef} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from "axios";
import { crearCasa } from 'utils/api';


const NewCasa = ({showTable, addNewHouseToCard, houseList, ejecutarConsulta}) => {

    const formRef = useRef(null);
    /*const [nameP, setNameP] = useState();
    const [adress, setAdress] = useState();
    const [price, setPrice] = useState();
    const [state, setState] = useState();*/
        
    /*const guardardatos = () =>{
        showTable(false);
        addNewHouseToCard([...houseList, {
            name: nameP,
            adress: adress,
            price: price,
            state: state,
        } ])
        toast.success("New House Created")
    }*/

    const submitForm = async (e)=>{
        e.preventDefault();
        const fd = new FormData(formRef.current);

        const newHouse = {}
        fd.forEach((value, key)=>{
            newHouse[key] = value;
        });

        await crearCasa(
            {name: newHouse.name, 
            adress: newHouse.address, 
            price: newHouse.price, 
            state: newHouse.state},

            (response)=>{
                console.log(response.data);
                toast.success("New House Created")
            },

            (error)=>{
                console.error(error);
                toast.error("An Error Ocurred");
            }
        )

        /* const options = {
            method: 'POST',
            //url donde esta desplegada la api
            url: 'http://localhost:5000/casas',
            headers: {'Content-Type': 'application/json'},
            //datos del fomulario se asignan como vlor de los campos de la bd
            data: {name: newHouse.name, adress: newHouse.address, price: newHouse.price, state: newHouse.state}
          };
        

        await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            toast.success("New House added")  
          }).catch(function (error) {
            console.error(error);
            toast.error("An Error ocurred") 
          }); */
        
        showTable(false);
        ejecutarConsulta(true);
       
    }

    return (
        <div className=" w-full flex justify-center mt-4">

            <form onSubmit ={submitForm} ref={formRef} className="flex flex-col shadow-xl h-full w-1/2 justify-evenly pl-5">
                <h2 className="flex justify-center title_style">New Property</h2>
                <label htmlFor="propertyname" className="flex flex-col h-20 font-semibold text-lg">
                    Propertie's Name
                    <input required className="input_style_new" placeholder="Name of the property" name="name" type="text" 
                    /*value={nameP}
                    onChange={
                        (e)=>{
                            setNameP(e.target.value); 
                        }
                    }*/ />
                </label>

                <label htmlFor="propertyaddress" className="flex flex-col  h-20 font-semibold text-lg">
                    Propertie's Adress
                    <input required className="input_style_new" placeholder="Where is the property?" name="address"  type="text" />
                </label>

                <label htmlFor="propertyprice" className="flex flex-col  h-20 font-semibold text-lg">
                    Propertie's Price
                    <input required className="input_style_new" name="price" type="number" min={0}/>
                </label>


                <label htmlFor="propertystate" className="flex flex-col  h-20 font-semibold text-lg">
                    This property is 
                    <select className="input_style_new" name="state" defaultValue={0} required>
                        <option value={0} disabled> Select an option</option>
                        <option> For Sale</option>
                        <option> For Rent</option>
                    </select>
                </label>
                <button type="submit" className="boton_default self-center">Create</button>
            </form>
        </div>
    )
}

export default NewCasa
