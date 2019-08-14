import React from 'react'
import moment from 'moment'

import '../Month.scss'
import './BackBlanks.scss'

export default props => {

    const blnk = props.blnk + 1

    return (
        <div
            className="day blank"
            style={{
                gridArea: `day${blnk + props.monthDays}`
            }}
            onClick={() => props.setCurrentDate(moment(`${props.month}-${blnk}`))}
        >{blnk}</div>
    )

}