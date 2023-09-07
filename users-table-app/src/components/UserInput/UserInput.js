import classes from "./UserInput.module.css"
import Card from "../UI/Card";
import Button from "../UI/Button";
import InputGroup from "./InputGroup";
import React from "react";

const initialInput = {
    name: "",
    age: ""
}

export default function UserInput(props) {
    const [userInput, setUserInput] = React.useState(initialInput)

    const InputChangeHandler = (key, value) => {
        setUserInput(prevValue => {
            return {...prevValue, [key]: +value || value}
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()

        // TODO: data validation
        if (userInput.name.length === 0) {
            console.log("Name length is 0!")
        }
        else if(userInput.age < 0 || userInput.age > 150) {
            console.log("Wrong age!")
        }
        else {
            props.onAddUser(userInput)
            setUserInput(initialInput)
        }
    }

    return (
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
    )
}