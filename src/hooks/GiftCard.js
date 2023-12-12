import React from "react"

const GiftCard = () => {

    const [card, setCard] = React.useState({
        customer: "Jeniffer Smith",
        guests: 4,
        used: false
    })

    const handleUseGiftCard = () => {
        setCard({...card, used: true})
    }

    return (
        <div>
            <h1>Gift Card Page</h1>
            <h2>Customer: {card.customer}</h2>
            {!card.used ? 
                <div>            
                    <h4>Free dinner for {card.guests} guests</h4>
                    <p>To use your cupon, click the button below</p>
                    <button onClick={handleUseGiftCard}>Spend Gift Card</button>
                </div>
                :
                <div>
                    <h4>Your coupon has been used</h4>
                    <p>Please visit our restaurant to renew your gift card</p>
                </div>
            }
        </div>
    )
}

export default GiftCard