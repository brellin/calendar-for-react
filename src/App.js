import React, { useState } from 'react'
import moment from 'moment'

import Month from './components/Month'

export default function App() {

    const currentDate = moment().format('YYYY-MM-DD')

    const [selected, setSelected] = useState(currentDate)

    return (
        <Month
            currentDate={currentDate}
            selected={selected}
            setSelected={setSelected}
            style={{ height: '20%' }}
        />
    )

}
