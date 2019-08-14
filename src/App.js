import React, { useState } from 'react'
import moment from 'moment'

import './App.scss'

function App(props) {

  const [dateObj, setDateObj] = useState(moment())

  const prevMonth = moment(dateObj).subtract(1, 'month').daysInMonth()

  const firstDoM = moment(dateObj).startOf('month').format('d')

  const frontBlanks = []
  for (let i = 0; i < firstDoM; i++) frontBlanks.push(i)

  const daysInMonth = moment(dateObj).daysInMonth()

  const backBlanks = []
  for (let i = 0; i < (42 - daysInMonth - frontBlanks.length); i++) backBlanks.push(i)

  const monthDays = []
  for (let i = 1; i <= daysInMonth; i++) monthDays.push(i)

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
