import React from 'react'

import '../Month.scss'
import './BackBlanks.scss'

export default props => {

    return (
        <div
            className="day blank"
            style={{
                gridArea: `day${props.blnk + props.monthDays + 1}`
            }}
            key={props.blnk * Math.random()}
        >{props.blnk + 1}</div>
    )

}