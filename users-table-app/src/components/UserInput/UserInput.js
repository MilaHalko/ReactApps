import React from "react";
import classes from "./UserInput.module.css"
import Card from "../UI/Card";
import Button from "../UI/Button";
import InputGroup from "./InputGroup";
import ErrorModal from "../UI/ErrorModal";

const initialInput = {
    name: "",
    age: ""
}

export default function UserInput(props) {
    const [userInput, setUserInput] = React.useState(initialInput)
    const [error, setError] = React.useState()

    const InputChangeHandler = (key, value) => {
        setUserInput(prevValue => {
            return {...prevValue, [key]: +value || value}
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()

        if (userInput.name.trim().length === 0) {
            setError({
                title: "Invalid name",
                message: "Please, enter a valid name"
            })
        } else if (userInput.age.toString().trim().length === 0 || +userInput.age < 0) {
            setError({
                title: "Invalid age",
                message: "Please, enter a valid age"
            })
        } else {
            props.onAddUser(userInput)
            setUserInput(initialInput)
        }
    }

    const errorHandler = () => setError(null)

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.form}>
                <form onSubmit={submitHandler}>
                    <InputGroup label='Username' type='text'
                                id='name' value={userInput.name}
                                onChange={InputChangeHandler}/>
                    <InputGroup label='Age (Years)' type='number'
                                id='age' value={userInput.age}
                                onChange={InputChangeHandler}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}