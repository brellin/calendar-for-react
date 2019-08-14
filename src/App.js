import React, { useState } from 'react'
import moment from 'moment'

import Month from './components/Month'
import DatePicker from './components/DatePicker'

export default function App() {

    const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD'))

    return (
        <>
            <DatePicker currentDate={currentDate} setCurrentDate={setCurrentDate} />
            <Month currentDate={currentDate} setCurrentDate={setCurrentDate} />
        </>
    )

}
