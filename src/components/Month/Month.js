import React from 'react'

import monthVars from './vars'
import './Month.scss'

export default function Month(props) {

  const { prevMonth, frontBlanks, backBlanks, monthDays, weekdays } = monthVars(props.currentDate)

  return (

    <div className="Month">

      {weekdays.map(day => (
        <div
          className='day-name'
          style={{ gridArea: `${day}` }}
          key={day}
        >{day}</div>
      ))}

      {frontBlanks.map(blnk => (
        <div
          className='day blank'
          style={{ gridArea: `day${blnk + 1}` }}
          key={blnk * Math.random()}
        >{prevMonth - (frontBlanks.length - 1) + blnk}</div>
      ))}

      {monthDays.map(day => (
        <div
          className="day"
          style={{ gridArea: `day${frontBlanks.length + day}` }}
          key={day}
        >{day}</div>
      ))}

      {backBlanks.map(blnk => (
        <div
          className="day blank"
          style={{ gridArea: `day${blnk + monthDays + 1}` }}
        >{blnk + 1}</div>
      ))}

    </div>

  )

}
