import './ExpenseForm.css';
import React, {useState} from 'react';

const EMPTY_FORM = {
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
}

export default function ExpenseForm(props) {
    const [userInput, setUserInput] = useState(EMPTY_FORM);

    const titleChangeHandler = event => setUserInput(prevState => {
        return {...prevState, enteredTitle: event.target.value}
    });

    const amountChangeHandler = event => setUserInput(prevState => {
        return {...prevState, enteredAmount: event.target.value}
    });

    const dateChangeHandler = event => setUserInput(prevState => {
        return {...prevState, enteredDate: event.target.value}
    });

    const submitHandler = (event) => {
        event.preventDefault();
        const finalData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        props.onSaveExpenseData(finalData);
        setUserInput(EMPTY_FORM);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        value={userInput.enteredTitle}
                        type='text'
                        onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input
                        value={userInput.enteredAmount}
                        type='number'
                        min={0.01}
                        step={0.01}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        value={userInput.enteredDate}
                        type='date'
                        min="2020-08-25"
                        max="2023-09-25"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancelClick}>Cancel</button>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
}