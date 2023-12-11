const desserts = [
    {
      name: "Chocolate Cake",
      calories: 400,
      createdAt: "2022-09-01",
    },
    {
      name: "Ice Cream",
      calories: 200,
      createdAt: "2022-01-02",
    },
    {
      name: "Tiramisu",
      calories: 300,
      createdAt: "2021-10-03",
    },
    {
      name: "Cheesecake",
      calories: 600,
      createdAt: "2022-01-04",
    },
  ];

const LowCalorieDesserts = () => {

    const lowCalorieDesserts = desserts.filter(dessert => dessert.calories < 500)
    const dessertsList = lowCalorieDesserts.map(dessert => <li>{`${dessert.name} - ${dessert.calories} cal.`}</li>)

    return (
        <div>
            <h1>Low Calorie Desserts</h1>
            <ul>
                {dessertsList}
            </ul>
        </div>
    )
}

export default LowCalorieDesserts