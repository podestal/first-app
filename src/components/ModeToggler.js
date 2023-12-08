import React, {useState} from "react"

const ModeToggler = () => {

    const [darkModeOn, setDarkModeOn] = useState(true)
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>

    const handleClick = () => {
        setDarkModeOn(!darkModeOn)
    }

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    )
}

export default ModeToggler