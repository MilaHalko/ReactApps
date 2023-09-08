import classes from "./UsersTable.module.css"
import Card from "../UI/Card";

export default function UsersTable(props) {
    return (
        <Card className={classes.table}>
            {props.usersData.length === 0 && <p className={classes["no-users"]}>
                No users haven`t been added yet</p>
            }
            <ul>
                {props.usersData.map(userData => (
                    <li key={userData.id}>
                        {userData.name} ({userData.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    )
}