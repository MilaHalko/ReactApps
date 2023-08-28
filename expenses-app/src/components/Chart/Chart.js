import './Chart.css'
import ChartBar from './ChartBar'

export default function Chart(props) {
    const allValues = props.dataPoints.map(point => point.value)
    const totalMax = Math.max(...allValues)
    return <div className='chart'>
        {props.dataPoints.map(dataPoint =>
            <ChartBar
                key={dataPoint.label}
                label={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMax}
            />)}
    </div>
}