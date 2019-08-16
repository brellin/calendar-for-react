import React from 'react'
import moment from 'moment'

export default props => {

    const blank = props.prevMonth - props.frontBlanks.length + props.blank + 1

    return (
        <div
            className='day blank'
            style={{ gridArea: `day${props.blank + 1}` }}
            onClick={() => props.setSelected(moment(`${props.month}-${blank}`).format('YYYY-MM-DD'))}
        >{blank}</div>
    )

}