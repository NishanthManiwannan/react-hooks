import React, {useContext} from 'react'
import { AppContaxt } from './UseContext'

function User() {

    const {username} = useContext(AppContaxt)
    return (
        <div>
            {username}
        </div>
    )
}

export default User
