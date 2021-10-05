import React from 'react'

const AutheLayout = ({children}) => {
    return (
        <div>
            <main className="flex flex-col h-screen items-center justify-center overflow-y-scroll ">{children}</main>
        </div>
    )
}

export default AutheLayout
