import './CourseInput.css'
import React from "react";
import Button from "../../UI/Button/Button";

export default function CourseInput(props) {

    const [enteredValue, setEnteredValue] = React.useState('')
    const submitHandler = (event) => {
        event.preventDefault()
        props.onSubmitGoal(enteredValue)
        setEnteredValue('')
    }
    const inputChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-control'>
                <label>Course Goal</label>
                <input onChange={inputChangeHandler} value={enteredValue}/>
            </div>

            <Button type='submit'>Add Goal</Button>
        </form>
    )
}