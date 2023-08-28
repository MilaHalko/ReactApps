import './NewExpense.css'
import {useState} from "react";
import ExpenseForm from './ExpenseForm.js'

export default function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false)
    const startEditingHandler = () => setIsEditing(true)
    const endEditingHandler = () => setIsEditing(false)
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {...enteredExpenseData, id: Math.random().toString()}
        props.onAddExpense(expenseData)
        endEditingHandler()
    }

    return (
        <div className='new-expense'>
            {!isEditing ?
                <button onClick={startEditingHandler}>Add New Expense</button>
                :
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancelClick={endEditingHandler}
                />
            }
        </div>
    )
}