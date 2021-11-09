import React,{useRef} from 'react'

function UseRef() {

    const inputRef = useRef(null)

    const onClick = () => {
        inputRef.current.focus();//focus th field
        inputRef.current.value = "";//clear the field
    }
    return (
        <div>
            <h1>Pedro</h1>

            <input type="text" placeholder="Ex....." ref={inputRef}></input>
            <button onClick={onClick}>Change Name</button>
        </div>
    )
}

export default UseRef
