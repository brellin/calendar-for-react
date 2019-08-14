import React from 'react'
import { white } from 'ansi-colors';

export const Weekday = (props) => {
    return (
        <div
            className='day-name'
            style={{
                gridArea: `${props.day}`,
                color: white,
                background: props.background || props.backgroundColor
            }}
            key={props.day}
        >{props.day}</div>
    )
}