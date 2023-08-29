import './CourseGoalItem.css'

export default function CourseGoalItem(props) {

    const goalClickHandler = () => {
        props.onDelete(props.id)
    }

    return (
        <li onClick={goalClickHandler} className='goal-item'>
            {props.children}
        </li>
    )
}