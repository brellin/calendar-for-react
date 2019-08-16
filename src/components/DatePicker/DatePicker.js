import React, { useState, Fragment } from 'react'
import { useForm } from 'customHooks'
import moment from 'moment'

import './DatePicker.scss'

export default function DatePicker(props) {

    const [selectDate, setSelectDate] = useState(false)

    const { fields, handleChanges, submit } = useForm(setDate)

    function setDate() {
        props.setCurrentDate(fields.date)
        setSelectDate(!selectDate)
    }

    return (
        <Fragment>
            <form className='DatePicker' onSubmit={submit} style={{ display: selectDate ? 'flex' : 'none' }}>
                <input
                    type={props.week ? 'datetime-local' : 'date'}
                    name='date'
                    onChange={handleChanges}
                    defaultValue={moment(props.currentDate).format('YYYY-MM-DD')}
                    id='dp'
                />
                <button type="submit">Submit</button>
            </form>
            <button onClick={() => setSelectDate(!selectDate)} style={{ display: selectDate ? 'none' : 'block' }}>Change Date</button>
        </Fragment>
    )
}
