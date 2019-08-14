import React from 'react'
import './modal.scss'



const Modal = (props) => {

    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <h1>Modal</h1>
                <button type="button" style={{ marginTop: '25px', background: '#0B3D91', color: 'white', border: 'none', borderRadius: '5px', padding: '7px', marginBottom: '15px' }} onClick={props.handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
};

export default Modal