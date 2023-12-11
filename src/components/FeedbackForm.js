import React from "react"

const FeedbackForm = () => {

    const [score, setScore] = React.useState("10")
    const [comment, setComment] = React.useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Number(score) <= 5 && comment.length <= 10) {
            alert("Please provide a comment explaining why the experience was poor")
            return
        }
        console.log("Form submited");
        setScore("10")
        setComment("")
    }

    return (
        <div>
            <h1>Feedback Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Score: {score}</label>
                    <br />
                    <input 
                        type="range" 
                        min="0" 
                        max="10"
                        value={score}
                        onChange={e => setScore(e.target.value)}
                    />
                    <label>Comment:</label>
                    <br></br>
                    <textarea 
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FeedbackForm