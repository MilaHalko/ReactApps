import classes from "../../styles/UserInputButtons.module.css"

export default function ActionButtons(props) {
    return (
        <div className={classes.actions}>
            <button onClick={props.onReset} type='reset' className={classes.buttonAlt}>Reset</button>
            <button type='submit' className={classes.button}>Calculate</button>
        </div>
    )
}