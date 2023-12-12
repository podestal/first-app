import React from "react"

const UseStateHook = () => {

    const [restaurantName, setRestaurantName] = React.useState("Lemon")

    const handleUpdateRestaurantName = () => {
        setRestaurantName("Little Lemon")
    }

    return (
        <div>
            <h1>useState Hook</h1>
            <p>Restaurant Name: {restaurantName}</p>
            <button onClick={handleUpdateRestaurantName}>Update restaurant name</button>
        </div>
    )
}

export default UseStateHook