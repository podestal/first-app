import React from "react"

const SignupForm = () => {

    const [firstname, setFirstname] = React.useState("")
    const [lastname, setLastname] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [passwordValidator, setPasswordValidator] = React.useState(true)
    const [role, setRole] = React.useState("Role 1")
    const passwordError = "Password should have at least 8 characters"

    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstname.length == 0) {
            alert("First name is required")
            return
        }
        if (email.length == 0) {
            alert("Email is required")
            return
        }   
        if (password.length == 0) {
            alert("Password is required")
            return
        } 
        if (password.length < 8) {
            setPasswordValidator(false)
            return
        }
        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword("")
        setPasswordValidator(true)
        setRole("Role 1")
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <label htmlFor="firstname">First name</label>
                    <input 
                        id="firstname" 
                        type="text" 
                        placeholder="First name"
                        value={firstname}
                        onChange={e => setFirstname(e.target.value)}
                    />
                    <label htmlFor="lastname">Last name</label>
                    <input 
                        id="lastname" 
                        type="text" 
                        placeholder="Last name"
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                    />
                    <label htmlFor="email">Email address</label>
                    <input 
                        id="email" 
                        type="email" 
                        placeholder="Email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                    />
                    {!passwordValidator && <p className="error">{passwordError}</p>}
                    <label htmlFor="role">Role</label>
                    <select value={role} onChange={e => setRole(e.target.value)}>
                        <option name="">Role 1</option>
                        <option name="">Role 2</option>
                        <option name="">Role 3</option>
                    </select>
                </div>
                <button type="submit">Create Account</button>
            </form>
        </div>
    )
}

export default SignupForm