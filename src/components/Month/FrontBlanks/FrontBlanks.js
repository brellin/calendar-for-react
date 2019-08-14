import React from 'react'

import '../Month.scss'
import './FrontBlanks.scss'

export default props => {

    const blank = props.blank + 1

    return (
        <div
            className='day blank'
            style={{
                gridArea: `day${blank}`
            }}
        >{props.prevMonth - props.frontBlanks.length + blank}</div>
    )

}