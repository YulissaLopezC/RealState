import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';

const PublicLayout = ({children}) => {
    return (
        <>
            <Navbar/> 
            <div className="h-screen flex flex-col ">
                <main className="flex flex-col items-center h-full ">{children}</main>
            </div>
            <Footer/>
        </>
    )
}

export default PublicLayout
