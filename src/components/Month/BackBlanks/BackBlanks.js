import React from 'react'

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
            onClick={() => console.log(blnk)}
        >{blnk}</div>
    )

}