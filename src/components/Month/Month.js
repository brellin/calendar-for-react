import React from 'react'
import { Weekday } from './Weekdays'
import { FrontBlank } from './FrontBlanks'
import monthVars from './vars'
import './Month.scss'

export default function Month(props) {

  const { prevMonth, frontBlanks, backBlanks, monthDays, weekdays, currentDay } = monthVars(props.currentDate)

  return (

    <div className="Month">

      {weekdays.map(day => (
        <Weekday day={day} />
      ))}

      {frontBlanks.map(blank => (
        <FrontBlank blank={blank} prevMonth={prevMonth} frontBlanks={frontBlanks} />
      ))}

      {monthDays.map(day => (
        <div
          className={`day${currentDay === day + '' ? ' active' : ''}`}
          style={{
            gridArea: `day${frontBlanks.length + day}`
          }}
          key={day}
        >{day}</div>
      ))}

      {backBlanks.map(blnk => (
        <div
          className="day blank"
          style={{
            gridArea: `day${blnk + monthDays + 1}`,
            background: props.background || props.backgroundColor || 'inherit'
          }}
          key={blnk * Math.random()}
        >{blnk + 1}</div>
      ))}

    </div>

  )

}
