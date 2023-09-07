import UserInput from "./components/UserInput/UserInput";
import UsersTable from "./components/UsersTable/UsersTable";
import React from "react";

export default function App() {
    const [usersList, setUsersList] = React.useState([])

    const addUserHandler = (userData) => {
        setUsersList(prevList => {
            return [...prevList, {name: userData.name, age: userData.age, id: Math.random().toString()}]
        })
    }

    return (
        <div>
            <UserInput onAddUser={addUserHandler}/>
            <UsersTable usersData={usersList}/>
        </div>
    );
}
