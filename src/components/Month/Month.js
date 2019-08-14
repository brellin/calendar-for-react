import React from 'react'

import Weekday from './Weekdays'
import FrontBlank from './FrontBlanks'
import MonthDay from './MonthDays'
import BackBlank from './BackBlanks'
import monthVars from './vars'
import './Month.scss'

export default function Month(props) {

  const { prevMonth, frontBlanks, backBlanks, monthDays, weekdays, currentDay } = monthVars(props.currentDate)

  return (

    <div className="Month">

      {weekdays.map(day => <Weekday day={day} key={day} />)}

      {frontBlanks
        .map(blank =>
          <FrontBlank
            blank={blank}
            prevMonth={prevMonth}
            frontBlanks={frontBlanks}
            key={blank * Math.random()}
          />
        )}

      {monthDays
        .map(day =>
          <MonthDay
            day={day}
            frontBlanks={frontBlanks}
            currentDay={currentDay}
            key={day}
          />
        )}

      {backBlanks
        .map(blnk =>
          <BackBlank
            blnk={blnk}
            monthDays={monthDays}
            key={blnk * Math.random()}
          />
        )}

    </div>

  )

}
