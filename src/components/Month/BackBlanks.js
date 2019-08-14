import React from 'react'


export const BackBlank = (props) => {
    return (
        <div
            className="day blank"
            style={{
                gridArea: `day${props.blnk + props.monthDays + 1}`,
                background: props.background || props.backgroundColor || 'inherit'
            }}
            key={props.blnk * Math.random()}
        >{props.blnk + 1}</div>
    )
}