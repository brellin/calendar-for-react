import React from 'react'
import { useForm } from 'customHooks'

import './DatePicker.scss'

export default function DatePicker(props) {

    const { fields, handleChanges, submit } = useForm(setDate)

    function setDate() {
        props.setCurrentDate(fields.date)
    }

    return (
        <form className='DatePicker' onSubmit={submit}>
            <input type='date' name='date' onChange={handleChanges} />
            <button type="submit">Change Date</button>
        </form>
    )
}
