import "./ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate.js";
import Card from '../UI/Card.js';

export default function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}