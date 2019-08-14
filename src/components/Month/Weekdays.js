import React from 'react'

export const Weekday = (props) => {
    return (
        <div
            className='day-name'
            style={{
                gridArea: `${props.day}`,
                background: props.background || props.backgroundColor || 'linear-gradient(blue, lightslategrey)'
            }}
            key={props.day}
        >{props.day}</div>
    )
}