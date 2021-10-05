import React from 'react'

const Footer = () => {
    return (
        <div className=" bg-gray-50 border-t-2 border-indigo-500 flex flex-col justify-center items-center mt-4 py-8 box-border">
            <div className="text-3xl text-indigo-500 w-36 flex justify-between">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
            </div>
            <div className="mt-6 w-56 text-center ">
                <ul className="flex justify-between items-center">
                    <li>Info</li>
                    <li>Support</li>
                    <li>Marketing</li>
                </ul>
            </div>
            <div className="mt-1 w-40 text-center ">
                <ul className="flex justify-between">
                    <li>Terms of use</li>
                    <li>Policy</li>
                </ul>

                <h4 className="text-sm text-gray-300">Yulissa Lopez Cortes</h4>
            </div>
        </div>
    )
}

export default Footer
