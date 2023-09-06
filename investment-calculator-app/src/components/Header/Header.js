import classes from '../../styles/Header.module.css'
export default function Header () {
    return (
        <header className={classes.header}>
            <img src={require('../../assets/investment-calculator-logo.png')} alt='logo'/>
            <h1>Investment Calculator</h1>
        </header>
    )
}