import React,{useReducer} from 'react'

function UseReducer() {
    // const [count,setCount] = useState(0);
    // const [showText,setShowText] = useState(true);

    const reducer = (state, action) => {
        switch (action.type){
            case "INCREMENT" : 
                return {count : state.count + 1, showText: state.showText}

            case "toggleShowText": 
                return {count : state.count, showText: !state.showText}

            default :
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        count : 0 ,
        showText : true
    })
    return (
        <div>
            <h1>{state.count}</h1>

            <button onClick={() => {
                dispatch({type : "INCREMENT"})
                dispatch({type : "toggleShowText"})

            }}>
                Click
            </button>

            {state.showText && <p>Tis is a text</p>}
        </div>
    )
}

export default UseReducer
