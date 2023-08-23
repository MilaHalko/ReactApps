import "./ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate.js";
import Card from '../UI/Card.js';

export default function ExpenseItem({ date, title, amount }) {

    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </Card>
    );
}