import React, { useState } from 'react'
import moment from 'moment'

import Month from './components/Month'

export default function App() {

    const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD'))

    return (
        <Month
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            style={{ height: '20%' }}
        />
    )

}
