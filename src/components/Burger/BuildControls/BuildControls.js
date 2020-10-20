import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'


const controls = [
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Salad', type: 'salad' },
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p><strong>Current Price: {props.price}</strong></p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label} 
                    added={() => props.ingredientAdded(ctrl.type)}
                    sub={() => props.ingredientSub(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                    />
            ))}
            <button className = {classes.OrderButton} disabled = {!props.purchaseble} onClick = {props.ordered}>Order Now!</button>
        </div>
    )
}

export default buildControls
