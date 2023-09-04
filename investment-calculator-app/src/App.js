export default function App() {
    return (
        <div>
            <header className='header'>
                <img src={require('./assets/investment-calculator-logo.png')} alt='logo'/>
                <h1>Investment Calculator</h1>
            </header>
            <form className='form'>
                <div className='input-group'>
                    <p>
                        <label>Current savings ($)</label>
                        <input type='number'/>
                    </p>
                    <p>
                        <label>Yearly savings ($)</label>
                        <input type='number'/>
                    </p>
                </div>
                <div className='input-group'>
                    <p>
                        <label>Expected interest (%, per year)</label>
                        <input type='number'/>
                    </p>
                    <p>
                        <label>Investment duration (years)</label>
                        <input type='number'/>
                    </p>
                </div>
                <div className='actions'>
                    <button type='reset' className='buttonAlt'>Reset</button>
                    <button type='submit' className='button'>Calculate</button>
                </div>
            </form>
            <table className='result'>
                <thead>
                <tr>
                    <th>Year</th>
                    <th>Total savings</th>
                    <th>Interest (year)</th>
                    <th>Interested capital</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Year number</td>
                    <td>Total savings end of year</td>
                    <td>Total interest gained</td>
                    <td>Total interested capital</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}