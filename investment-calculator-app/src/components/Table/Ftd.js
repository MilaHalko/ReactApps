const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})

export default function Ted(props) {
    return (
        <td>
            {formatter.format(props.children)}
        </td>
    )
}