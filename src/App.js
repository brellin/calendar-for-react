import React, { useState } from 'react'
import moment from 'moment'

import { monthVars } from './month'
import './App.scss'

function App(props) {

  const [currentDate, setCurrentDate] = useState(moment())

  const { prevMonth, frontBlanks, backBlanks, monthDays } = monthVars(currentDate)

  return (

    <div className="App">

      {moment.weekdays().map(day => (
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

export default App
