import React, { useState } from 'react'
import Modal from '../../Modal/Modal'
import './Weekdays.scss'

export default props => {
    const [show, setShow] = useState(false)

    const showModal = () => {
        setShow(!show);
    };

    const hideModal = () => {
        setShow(false);
    };

    return (

        <div
            onClick={() => showModal()}
            className='day-name'
            style={{
                gridArea: `${props.day}`,
                color: 'white',
                background: props.background || props.backgroundColor || 'blue'
            }}
            key={props.day}
        >{props.day}

            <Modal show={show} handleClose={hideModal} />
        </div>

    )
}