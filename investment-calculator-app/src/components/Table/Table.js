import classes from "../../styles/Table.module.css"
import Headlines from "./Headlines"
import DataOutput from "./DataOutput"
import InitialOutput from "./InitialDataOutput"

export default function Table(props) {

    return (
        <table className={classes.result}>
            <Headlines/>
            <tbody>
            {props.userInput ?
                <DataOutput data={props.data} initialInvestment={props.userInput['current-savings']}/> :
                <InitialOutput/>
            }
            </tbody>
        </table>
    )
}