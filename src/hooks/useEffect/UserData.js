import React from "react";

const UserData = () => {

    const [user, setUser] = React.useState([])

    const fetchData = () => {
        fetch("https://randomuser.me/api/?results=1")
            .then(response => response.json())
            .then(data => setUser(data))
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return Object.keys(user).length > 0 ? (
        <div>
            {console.log("objects keys", Object.keys(user))}
            <h1>Customer Data</h1>
            <h2>Name: {user.results[0].name.first}</h2>
            <img src={user.results[0].picture.large} alt="user-pic"/>
        </div>
    ) :
    (
        <div>
            <h1>Fetching Data ...</h1>
        </div>
    )
}

export default UserData