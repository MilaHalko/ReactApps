export default function ActionButtons(props) {
    return (
        <div className='actions'>
            <button onClick={props.onReset} type='reset' className='buttonAlt'>Reset</button>
            <button type='submit' className='button'>Calculate</button>
        </div>
    )
}