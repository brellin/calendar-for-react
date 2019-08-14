import React from 'react'


export default props => {

    return (
        <div
            className={`day${props.currentDay === props.day + '' ? ' active' : ''}`}
            style={{
                gridArea: `day${props.frontBlanks.length + props.day}`
            }}
        >{props.day}</div>
    )

}