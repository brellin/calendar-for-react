import React, { useState } from 'react'
import moment from 'moment'

import DatePicker from '../DatePicker'
import Weekday from './Weekdays'
import FrontBlank from './FrontBlanks'
import MonthDay from './MonthDays'
import BackBlank from './BackBlanks'
import Modal from '../Modal'
import monthVars from './vars'
import './Month.scss'



export default function Month(props) {

 


  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState(moment())

  const showModal = () => setShow(!show)

  const { prevMonth, frontBlanks, backBlanks, monthDays, weekdays, currentDay } = monthVars(props.currentDate)

  return (

    <div className="Month">

      <div className="top" style={{ gridArea: 'title' }}>
        <div className="title">
          <button
            className='next'
            onClick={() => props.setCurrentDate(moment(props.currentDate).subtract(1, 'month'))}
          >{'<'}</button>
          <h3>{moment(props.currentDate).format('MMMM YYYY')}</h3>
          <button
            className='next'
            onClick={() => props.setCurrentDate(moment(props.currentDate).add(1, 'month'))}
          >{'>'}</button>
        </div>
        <DatePicker id='dp' currentDate={props.currentDate} setCurrentDate={props.setCurrentDate} />
      </div>

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
            setCurrentDate={props.setCurrentDate}
            month={moment(props.currentDate).subtract(1, 'month').format('YYYY-MM')}
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
            setSelected={setSelected}
            currentDate={props.currentDate}
          />
        )}

      {backBlanks
        .map(blnk =>
          <BackBlank
            blnk={blnk}
            monthDays={monthDays}
            key={blnk * Math.random()}
            setCurrentDate={props.setCurrentDate}
            month={moment(props.currentDate).add(1, 'month').format('YYYY-MM')}
          />
        )}

      <Modal
        show={show}
        showModal={showModal}
        selected={selected}
        setSelected={setSelected}
      />

    </div>

  )

}
