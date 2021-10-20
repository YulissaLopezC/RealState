import React from 'react'

const Cart = (props) => {
    return (
        <div className="border-2 flex flex-col w-64 sm:w-96 sm:h-full h-2/4 items-center mx-8 shadow-lg">
           <img className="w-10/12 h-auto" src={props.imagen} alt="imagen"/>
           <h2 className=" capitalize font-bold text-xl">{props.titulo}</h2>
           <p className="font-light  text-xs sm:text-lg px-4">{props.descripcion}</p>
           <button className="boton_card" type="button">{props.boton}</button>
        </div>
    )
}

export default Cart
