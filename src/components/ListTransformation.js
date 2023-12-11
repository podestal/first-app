const data = [
    {
        id: "1",
        title: "Tiramisu",
        description: "The vest tiramisu",
        price: "$5.00"
    },
    {
        id: "2",
        title: "Lemon Ice Cream",
        description: "mind blowing taste",
        price: "$4.00"
    },
    {
        id: "3",
        title: "Chocolate Mousse",
        description: "Unexplored flavor",
        price: "$6.00"
    }
]

const ListTransformation = () => {

    const listItems = data.map(dessert => {
        const itemText = `${dessert.title} - ${dessert.price}`
        return <li>{itemText}</li>
    })

    console.log(listItems)

    return (
        <div>
            <h1>List Transformation</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default ListTransformation