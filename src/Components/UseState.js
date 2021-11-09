import React, {useState} from 'react'

function UseState() {

    const [count,setCount] = useState(0);

    // let count = 0;

    const addCount = () => {
        // count = count + 1;
        setCount(count + 1)
    }

    //-------------------------------------

    const [inputvalue,setInputvalue] = useState("Use state");

    const onchange = (event) => {
        const inputVal = event.target.value;
        setInputvalue(inputVal)
    }
    return (
        <div>
            {count}
            <button onClick={addCount}>Add</button>

            {inputvalue}
            <input placeholder="type here...." onChange={onchange}></input>
        </div>
    )
}

export default UseState
