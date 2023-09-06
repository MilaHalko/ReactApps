import Headline from "./Headline";
import Output from "./Output";

export default function Table () {
    return (
        <table className='result'>
            <Headline>
                <th>Year</th>
                <th>Total savings</th>
                <th>Interest (year)</th>
                <th>Interested capital</th>
            </Headline>
            <Output/>
        </table>
    )
}