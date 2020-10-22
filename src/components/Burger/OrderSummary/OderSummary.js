import React from 'react'
import Aux from '../../../hoc/Auxx/Auxx'
import classes from './OrderSummary.css'
import Button from '../../UI/Buttons/Button'

const oderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
                <span className = {classes.span}>{igKey}</span>
                : {props.ingredients[igKey]}</li>)
                })
                return (
                <Aux>
                    <h3>Your Burger!</h3>
                    <p>Your delicious burger consist of the following ingredients :</p>
                    <ul>
                        {ingredientSummary}
                        </ul>
                        <p><strong>Total Price: {props.price} </strong></p>
                        <p>Continue to checkout!</p>
                        <Button btnType = "Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
                        <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
                </Aux>
    )
}

export default oderSummary
