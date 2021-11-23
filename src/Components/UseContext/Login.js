import React, {useContext} from 'react'
import { AppContaxt } from './UseContext'

function Login() {
    const {setUsername} = useContext(AppContaxt)

    return (
        <div>
            <input onChange={(event) => {
                setUsername(event.target.value)
            }}></input>
        </div>
    )
}

export default Login
