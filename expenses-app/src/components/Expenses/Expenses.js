import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import React, { useState } from 'react';


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChahgeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChahgeHandler} year={filteredYear} />
                {props.items.map(expense => <ExpenseItem amount={expense.amount} title={expense.title} date={expense.date}/>)}
            </Card>
        </div>
    );
}

export default Expenses;