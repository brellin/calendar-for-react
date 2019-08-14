import React from 'react'
import './Weekdays.scss'

export default props => {

    return (

        <div
            className='day-name'
            style={{
                gridArea: `${props.day}`,
                color: 'white',
                background: props.background || props.backgroundColor || 'blue'
            }}
        >{props.day}</div>

    )

}