import React, { useState } from 'react'
import {useEffect} from 'react'
import prueba from 'media/card1.png'
import NewCasa from './NewCasa'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import BotonDarkMode from 'components/BotonDarkMode';
import { useDarkMode } from 'context/DarkMode';
import { nanoid } from 'nanoid';

const listing = [{
    name: "Villa Italiana",
    adress : "Bel Air, LA",
    price: "20000",
    state: "rent"
},
{
    name:"Villa Yulissa",
    adress:"calabazas",
    price: "400",
    state: "rent"
},
{
    name:"Villa Yulissa",
    adress:"calabazas",
    price: "400M",
    state: "rent"
},
{
    name: "Villa Italiana",
    adress : "Bel Air, LA",
    price: "20000",
    state: "rent"
},
{
    name:"Villa Yulissa",
    adress:"calabazas",
    price: "400",
    state: "rent"
},
{
    name:"Villa Yulissa",
    adress:"calabazas",
    price: "400",
    state: "rent"
}
]

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
        setHouse(listing);
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
                : (<CardHouses houseList={houses}/>) }
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

export default Casas
