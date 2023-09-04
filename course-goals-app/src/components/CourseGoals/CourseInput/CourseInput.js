import React from "react";
import Button from "../../UI/Button/Button";
import styles from'./CourseInput.module.css'

export default function CourseInput(props) {
    const [enteredValue, setEnteredValue] = React.useState('')
    const [isValid, setIsValid] = React.useState(true)

    const submitHandler = (event) => {
        event.preventDefault()
        if (enteredValue.trim().length === 0) {
            setIsValid(false)
            return
        }
        props.onSubmitGoal(enteredValue)
        setEnteredValue('')
    }
    const inputChangeHandler = (event) => {
        enteredValue.trim().length > 0 && setIsValid(true)
        setEnteredValue(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
                <label>Course Goal</label>
                <input
                    onChange={inputChangeHandler}
                    value={enteredValue}
                />
            </div>

            <Button type='submit'>Add Goal</Button>
        </form>
    )
}