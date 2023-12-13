import React from "react"

const reducer = (state, action) => {
    if (action.type === "buy_ingredients") return {money: state.money - 10}
    if (action.type === "sell_a_meal") return {money: state.money + 10}
    if (action.type === "celebrity_visit") return {money: state.money + 5000}
}

const UseReducerBasics = () => {

    const initialState = {money: 100}
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <div>
            <h1>Use Reducer Hook</h1>
            <h2>Wallet: {state.money}</h2>
            <button onClick={() => dispatch({type: "buy_ingredients"})}>Shoping for veggies</button>
            <button onClick={() => dispatch({type: "sell_a_meal"})}>Serve a meal to the customer</button>
            <button onClick={() => dispatch({type: "celebrity_visit"})}>Celebrity Visit</button>
        </div>
    )
}

export default UseReducerBasics