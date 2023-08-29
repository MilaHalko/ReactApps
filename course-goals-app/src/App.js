import React, {useState} from "react";
import './App.css';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput'
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";

function App() {
    const DUMMY_CONTENT = [
        {text: 'Do all exercises!', id: 'g1'},
        {text: 'Finish the course!', id: 'g2'},
    ]

    const [courseGoals, setCourseGoals] = useState(DUMMY_CONTENT)

    const addGoalHandler = enteredText => {
        setCourseGoals(prevContent => {
            const updatedGoals = [...prevContent]
            updatedGoals.unshift({text: enteredText, id: Math.random().toString()})
            return updatedGoals
        })
    }
    const deleteGoalHandler = goalId => {
        setCourseGoals(prevContent => {
            return prevContent.filter(goal => goalId !== goal.id)
        })
    }

    const content = courseGoals.length === 0 ?
        <p style={{textAlign: "center"}}>No goals found. Maybe add one?</p> :
        <CourseGoalList items={courseGoals} onDeleteItem={deleteGoalHandler}/>

    return (
        <div>
            <section id='goal-form'>
                <CourseInput onSubmitGoal={addGoalHandler}/>
            </section>
            <section id='goals'>
                {content}
            </section>
        </div>
    )
}

export default App;
