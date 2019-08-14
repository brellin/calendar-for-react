import React from 'react'
import { useForm } from 'customHooks'
import moment from 'moment'

import './DatePicker.scss'

export default function DatePicker(props) {

    const { fields, handleChanges, submit } = useForm(setDate)

    function setDate() {
        props.setCurrentDate(fields.date)
    }

    return (
        <form className='DatePicker' onSubmit={submit}>
            <input
                type={props.week ? 'datetime-local' : 'date'}
                name='date'
                onChange={handleChanges}
                defaultValue={moment(props.currentDate).format('YYYY-MM-DD')}
            />
            <button type="submit">Change Date</button>
        </form>
    )
}
