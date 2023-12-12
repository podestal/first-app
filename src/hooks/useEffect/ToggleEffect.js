import React from "react"

const ToggleEffect = () => {
    const [toggle, setToggle] = React.useState(false)

    const handleToggle = () => setToggle(!toggle)

    // Everytime dom re-renders use effect runs
    // React.useEffect(() => {
    //     document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
    // })
    // Just runs at the first render (just once)
    // React.useEffect(() => {
    //     document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
    // }, [])
    // Runs everytime there is a change in the toggle variable
    React.useEffect(() => {
        document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
    }, [toggle])

    return (
        <div>
            <h1>Using the useEffect hook</h1>
            <button onClick={handleToggle}>Toggle message</button>
            {toggle && <h2>Welcome to Little Lemon</h2>}
        </div>
    )
}

export default ToggleEffect