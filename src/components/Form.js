import React from "react"

const Form = () => {

    const [name, setName] = React.useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted!!!");
        console.log(name);
    }

    return (
        <div>
            <h1>My Form</h1>
            <h2>Name: {name}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        id="name"
                        type="text" 
                        placeholder="Name" 
                        name="name" 
                        value={name} 
                        onChange={e => setName(e.target.value)}/>
                </div>
                <button disabled={!name} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form