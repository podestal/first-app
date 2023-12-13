import React, { useReducer } from "react"

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        default:
            return state
    }
}

const CounterAppReducer = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0})

    const handleIncrement = () => {
        dispatch({type: "increment"})
    }

    const handleDecrement = () => {
        dispatch({type: "decrement"})
    }

    return (
        <div>
            <h1>Counter App Reducer</h1>
            <button onClick={handleDecrement}>-</button>
            <span>{state.count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default CounterAppReducer