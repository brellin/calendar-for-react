import React from 'react'
import moment from 'moment'

export default props => {

    const currentMaY = moment(props.currentDate).format('YYYY-MM')

    return (
        <div
            onClick={() => {
                props.setSelected(moment(`${currentMaY}-${props.day}`))
                props.showModal()
            }}
            className={`day${props.currentDay === props.day + '' ? ' active' : ''}`}
            style={{
                gridArea: `day${props.frontBlanks.length + props.day}`
            }}
        >{props.day}</div>
    )

}
