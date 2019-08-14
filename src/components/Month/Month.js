import React, { useState } from 'react'

import Weekday from './Weekdays'
import FrontBlank from './FrontBlanks'
import MonthDay from './MonthDays'
import BackBlank from './BackBlanks'
import Modal from '../Modal/Modal'
import monthVars from './vars'
import './Month.scss'



export default function Month(props) {

  const [show, setShow] = useState(false)

  const showModal = () => {
    setShow(!show)
  }

  const { prevMonth, frontBlanks, backBlanks, monthDays, weekdays, currentDay } = monthVars(props.currentDate)

  return (

    <div className="Month">
    
      {weekdays
        .map(day =>
          <Weekday
            day={day}
            key={day}
          />
        )}

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
            showModal={showModal}
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

      <Modal
        show={show}
        handleClose={showModal}
      />

    </div>

  )

}
