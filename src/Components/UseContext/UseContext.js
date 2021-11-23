import React, { useState, createContext } from 'react'
import Login from './Login'
import User from './User'

export const AppContaxt = createContext(null)

function UseContext() {

    const [username, setUsername] = useState("")
    return (
        <AppContaxt.Provider value={{username, setUsername}}>
            <Login ></Login>
            <User ></User>
        </AppContaxt.Provider>
    )
}

export default UseContext
