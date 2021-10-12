import React from 'react'
import Cart from 'components/Cart'
import card1 from '../media/card1.png'
import card2 from '../media/card2.png'
import card3 from '../media/card3.png'


const Index = () => {
    return (
        <>
           <div className=" fondo flex flex-col h-1/2 w-full justify-center items-center">
               <h4 className="font-semibold text-gray-800 text-xl sm:text-4xl mb-4">Select the area of your dream house</h4>
               <div className="flex border-2 w-1/2 bg-white h-16 items-center rounded-md focus:ring ">
                    <input className="w-11/12 h-full text-lg pl-4 focus:outline-none" placeholder="Enter the location" type="text"/>
                    <i className="text-2xl text-gray-600 px-5 fas fa-search-location"></i>
               </div>
           </div>
            <h3 className="mt-2 font-semibold text-lg">Whether you’re buying, selling or renting, </h3> 
            <h3 className="font-semibold text-lg"> we can help you move forward.</h3>
            <div className="flex flex-col h-10 sm:flex-row justify-center w-full px-8 mt-8">
                <Cart imagen={card1} titulo="Buy a House"  descripcion="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar" boton="Search a House" />

                <Cart imagen={card2} titulo="Sell a Home"  descripcion="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar" boton="See your option" />
                   
                <Cart imagen={card3} titulo="Rent a Home"  descripcion="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar" boton="Find Rentals" />
                   
            </div>
            

        </>
    )
}

export default Index
