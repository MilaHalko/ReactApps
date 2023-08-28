import React from "react";
import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";


export default function ExpensesList(props) {
    if (props.items.length === 0)
        return <h2 className='expenses-list__falldown'>Found no expenses</h2>

    return <ul className='expenses-list'>
        {props.items.map(expense =>
            <ExpenseItem
                key={expense.id}
                amount={expense.amount}
                title={expense.title}
                date={expense.date}
            />
        )}
    </ul>
}