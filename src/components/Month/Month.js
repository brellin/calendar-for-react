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

  const showModal = () => setShow(!show)

  const { prevMonth, frontBlanks, backBlanks, monthDays, weekdays, currentDay } = monthVars(props.currentDate, props.selected)

  console.log(props.selected)

  return (

    <div className="Month">

      <div className="top" style={{ gridArea: 'title' }}>
        <div className="title">
          <button
            className='next'
            onClick={() => props.setSelected(moment(props.selected).subtract(1, 'month').format('YYYY-MM-DD'))}
          >{'<'}</button>
          <h3>{moment(props.selected).format('MMMM YYYY')}</h3>
          <button
            className='next'
            onClick={() => props.setSelected(moment(props.selected).add(1, 'month').format('YYYY-MM-DD'))}
          >{'>'}</button>
        </div>
        <DatePicker id='dp' currentDate={props.currentDate} setCurrentDate={props.setSelected} />
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
            setSelected={props.setSelected}
            month={moment(props.selected).subtract(1, 'month').format('YYYY-MM')}
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
            selected={props.selected}
            setSelected={props.setSelected}
            currentDate={props.currentDate}
          />
        )}

      {backBlanks
        .map(blnk =>
          <BackBlank
            blnk={blnk}
            monthDays={monthDays}
            key={blnk * Math.random()}
            setSelected={props.setSelected}
            month={moment(props.selected).add(1, 'month').format('YYYY-MM')}
          />
        )}

      <Modal
        show={show}
        showModal={showModal}
        selected={props.selected}
        setSelected={props.setSelected}
      />

    </div>

  )

}
