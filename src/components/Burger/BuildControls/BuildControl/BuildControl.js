import React from 'react'
import classes from './BuildControl.css'

const buildControl = (props) => {
    return (
        <div className = {classes.BuildControl}>
            <div className = {classes.Label}>{props.label}</div>   
            <button
                className={classes.Less} onClick={props.sub}
                disabled={props.disabled}><b>-</b>
            </button>
            <button className = {classes.More} onClick = {props.added}><b>+</b></button>
        </div>
    )
}

export default buildControl
