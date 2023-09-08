import classes from './UserInput.module.css'

export default function InputGroup(props) {
    const inputChangeHandler = event => {
        props.onChange(props.id, event.target.value)
    }

    return (
        <div className={classes['input-group']}>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} type={props.type} onChange={inputChangeHandler} value={props.value}/>
        </div>
    )
}
