import React from 'react'


export const Weekday = (props) => {
    return (
        <div
            className='day-name'
            style={{
                gridArea: `${props.day}`,
                color: 'white',
                background: props.background || props.backgroundColor || 'blue'
            }}
            key={props.day}
        >{props.day}</div>
    )
}