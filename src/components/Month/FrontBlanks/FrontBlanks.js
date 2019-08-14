import React from 'react'
import moment from 'moment'

import '../Month.scss'
import './FrontBlanks.scss'

export default props => {

    const blank = props.prevMonth - props.frontBlanks.length + props.blank + 1

    console.log(blank)

    return (
        <div
            className='day blank'
            style={{
                gridArea: `day${props.blank + 1}`
            }}
            onClick={() => props.setCurrentDate(moment(`${props.month}-${blank}`).format('YYYY-MM-DD'))}
        >{blank}</div>
    )

}