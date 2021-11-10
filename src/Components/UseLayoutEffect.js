import React, {useLayoutEffect, useEffect, useRef} from 'react'

function UseLayoutEffect() {

    const divRef = useRef(null);

    useLayoutEffect(() => {
        console.log(divRef.current.value)
    }, [])

    useEffect(() => [
        divRef.current.value = "Hello"
    ], [])
    
    return (
        <div>
            <input ref={divRef} value="Padro" style={{width:400, height:100}}></input>
        </div>
    )
}

export default UseLayoutEffect
