import React from "react"

const GoalForm = () => {

    const [goals, setGoals] = React.useState([])
    const [title, setTitle] = React.useState("")
    const [by, setBy] = React.useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setGoals([{
            title,
            by
        }, ...goals])
        setTitle("")
        setBy("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} placeholder="Goal" onChange={e => setTitle(e.target.value)}/>
                <input type="text" value={by} placeholder="By..." onChange={e => setBy(e.target.value)}/>
                <button>Add Goal</button>
            </form>
            <ListOfGoals 
                goals = {goals}
            />
        </div>
    )
}

const ListOfGoals = (props) => {
    return (
        <div>
            <ul>
                {props.goals.map(goal => <li key={goal.title}>My goal is to {goal.title}, by {goal.by}</li>)}
            </ul>
        </div>
    )
}


const LittleLemonGoals = () => {
    return (
        <div>
            <h1>My Little Lemon Goals</h1>
            <GoalForm />
        </div>
    )
}

export default LittleLemonGoals