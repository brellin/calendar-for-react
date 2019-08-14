import React from 'react'

import '../Month.scss'
import './FrontBlanks.scss'

export default props => {

    return (
        <div
            className='day blank'
            style={{
                gridArea: `day${props.blank + 1}`
            }}
            key={props.blank * Math.random()}
        >{props.prevMonth - (props.frontBlanks.length - 1) + props.blank}</div>
    )

}