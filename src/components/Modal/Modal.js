import React from 'react'
import moment from 'moment'

import './modal.scss'

const Modal = props => {

    return (

        <div
            className='Modal'
            style={{ display: props.show ? 'flex' : 'none' }}
            onClick={props.showModal}
        >
            <section
                className="modal-main"
                onClick={(e) => e.stopPropagation()}
            >
                <h1>{moment(props.selected).format('MMMM Do YYYY')}</h1>
                <button
                    type="button"
                    onClick={props.showModal}
                >Close</button>
            </section>
        </div>

    )

}

export default Modal
