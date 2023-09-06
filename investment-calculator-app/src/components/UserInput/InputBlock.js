export default function InputBlock(props) {
    return (
        <p>
            <label>{props.label}</label>
            <input type='number'
                   onChange={(event) => props.onInputChange(props.id, event.target.value)}
                   id={props.id}
                   value={props.value}
            />
        </p>
    )
}