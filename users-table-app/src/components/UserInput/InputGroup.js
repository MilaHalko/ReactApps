import classes from './UserInput.module.css'

export default function InputGroup(props) {
    const inputChangeHandler = event => {
        props.onChange(props.id, event.target.value)
    }

    return (
        <div className={classes['input-group']}>
            <label>{props.label}</label>
            <input type={props.type} onChange={inputChangeHandler} value={props.value}/>
        </div>
    )
}
