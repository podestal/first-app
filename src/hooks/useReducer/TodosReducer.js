import React from "react"

const ACTIONS = {
    ADD_TODO: "add-todo"
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...state, newTodo(action.payload.name)]
    }
}

const newTodo = (name) => {
    return {id: Date.now(), name, complete: false}
}

const TodosReducer = () => {

    const [todos, dispatch] = React.useReducer(reducer, [])
    const [name, setName] = React.useState("")

    {console.log(todos)}

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName("")
    }

    return (
        <div>
            <h1>Todos Reducer</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </form>
            <ul>
                {todos.map(todo => <li>{todo.id} - {todo.name}</li>)}
            </ul>
        </div>
    )
}

export default TodosReducer