import React from 'react'

const PrivateLayout = ({children}) => {
    return (
        <div>
            Layout privado
            <main>{children}</main>
        </div>
    )
}

export default PrivateLayout
