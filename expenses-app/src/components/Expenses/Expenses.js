import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem
                amount={props.items[0].amount}
                title={props.items[0].title}
                date={props.items[0].date} />
            <ExpenseItem
                amount={props.items[1].amount}
                title={props.items[1].title}
                date={props.items[1].date} />
            <ExpenseItem
                amount={props.items[2].amount}
                title={props.items[2].title}
                date={props.items[2].date} />
            <ExpenseItem
                amount={props.items[3].amount}
                title={props.items[3].title}
                date={props.items[3].date} />
        </Card>
    );
}

export default Expenses;