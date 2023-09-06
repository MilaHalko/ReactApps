import InputBlock from "./InputBlock";
import ActionButtons from "./ActionButtons";
import React from "react";

const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
}

export default function UserInput() {
    const [userInput, setUserInput] = React.useState(initialUserInput)

    const formSubmitHandler = (event) => {
        event.preventDefault()
    }

    const resetClickHandler = () => {
        setUserInput(initialUserInput)
    }

    const inputChangeHandler = (input, value) => {
        setUserInput(prevValue => {
            return {...prevValue, [input]: value}
        })
    }

    return (
        <form onSubmit={formSubmitHandler} className='form'>
            <div className='input-group'>
                <InputBlock id='current-savings'
                            label='Current savings ($)'
                            value={userInput["current-savings"]}
                            onInputChange={inputChangeHandler}/>
                <InputBlock id='yearly-contribution'
                            label='Yearly savings ($)'
                            value={userInput["yearly-contribution"]}
                            onInputChange={inputChangeHandler}/>
            </div>
            <div className='input-group'>
                <InputBlock id='expected-return'
                            label='Expected interest (%, per year)'
                            value={userInput["expected-return"]}
                            onInputChange={inputChangeHandler}/>
                <InputBlock id='duration'
                            label='Investment duration (years)'
                            value={userInput["duration"]}
                            onInputChange={inputChangeHandler}/>
            </div>
            <ActionButtons onReset={resetClickHandler}/>
        </form>
    )
}