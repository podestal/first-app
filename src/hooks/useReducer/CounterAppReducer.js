import React, { useReducer } from "react"

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        default:
            return state
    }
}

const CounterAppReducer = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0})

    const handleIncrement = () => {
        dispatch({type: ACTIONS.INCREMENT})
    }

    const handleDecrement = () => {
        dispatch({type: ACTIONS.DECREMENT})
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