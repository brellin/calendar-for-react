import React from 'react'
import moment from 'moment'

export default props => {

    const blnk = props.blnk + 1

    return (
        <div
            className="day blank"
            style={{ gridArea: `day${blnk + props.monthDays}` }}
            onClick={() => props.setSelected(moment(`${props.month}-${blnk}`).format('YYYY-MM-DD'))}
        >{blnk}</div>
    )

}