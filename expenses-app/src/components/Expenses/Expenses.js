import React, {useState} from 'react';
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2022")
    const filterChangeHandler = selectedYear => setFilteredYear(selectedYear)

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChangeHandler} year={filteredYear}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;