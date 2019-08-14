import React from 'react'


export const FrontBlank = (props) => {
    return (
        <div
            className='day blank'
            style={{
                gridArea: `day${props.blank + 1}`,
                background: props.background || props.backgroundColor || 'inherit'
            }}
            key={props.blank * Math.random()}
        >{props.prevMonth - (props.frontBlanks.length - 1) + props.blank}</div>
    )
}