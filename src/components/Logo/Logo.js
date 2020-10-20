import React from 'react'
import Logo from '../../assets/Images/burger-logo.png'
import classes from './Logo.css'

const logo = (props) => {
    return (
        <div className = {classes.Logo}>
            <img src= {Logo} alt = 'MakeYourBurger' />
        </div>
    )
}

export default logo 
