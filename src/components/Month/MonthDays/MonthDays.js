import React from 'react'
import moment from 'moment'

export default props => {

    const currentMaY = moment(props.selected).format('YYYY-MM')

    return (

        <div
            onClick={() => {
                props.setSelected(moment(`${currentMaY}-${props.day}`))
                props.showModal()
            }}
            className={`day${props.currentDate === currentMaY + '-' + props.day ? ' active' : ''}`}
            style={{
                gridArea: `day${props.frontBlanks.length + props.day}`
            }}
        >{props.day}</div>

    )

}
