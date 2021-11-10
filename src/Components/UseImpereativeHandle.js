import React, {useRef} from 'react'
import Button from './Button'

function UseImpereativeHandle() {
    const refValue = useRef(null)
    return (
        <div>
            <button onClick={() => {
                refValue.current.alterToggle()
            }}>Parent Button</button>
            <Button ref={refValue}></Button>
        </div>
    )
}

export default UseImpereativeHandle
