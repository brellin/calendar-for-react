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
    setShow(!show);
  };

  const hideModal = () => {
    setShow(false);
  };

  const { prevMonth, frontBlanks, backBlanks, monthDays, weekdays, currentDay } = monthVars(props.currentDate)

  return (

    <div className="Month">

      {weekdays.map(day => <Weekday day={day} />)}

      {frontBlanks.map(blank => <FrontBlank
        blank={blank}
        prevMonth={prevMonth}
        frontBlanks={frontBlanks}

      />)}

      {monthDays.map(day => <MonthDay
        day={day}
        frontBlanks={frontBlanks}
        currentDay={currentDay}
        showModal={showModal}
      />)}

      {backBlanks.map(blnk => <BackBlank
        blnk={blnk}
        monthDays={monthDays}
      />)}

      <Modal show={show} handleClose={hideModal} />
    </div>

  )

}
