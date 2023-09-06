import Ftd from "./Ftd"

export default function DataOutput(props) {
    return (props.data.map(yearData => (
            <tr key={yearData.year}>
                <Ftd>{yearData.year}</Ftd>
                <Ftd>{yearData.savingsEndOfYear}</Ftd>
                <Ftd>{yearData.yearlyInterest}</Ftd>
                <Ftd>{yearData.savingsEndOfYear - props.initialInvestment - yearData.yearlyContribution * yearData.year}</Ftd>
                <Ftd>{yearData.yearlyContribution * yearData.year}</Ftd>
            </tr>
        ))
    )
}