import React from 'react'


export default props => {


    return (
        <div
            onClick={() => props.showModal()}
            className={`day${props.currentDay === props.day + '' ? ' active' : ''}`}
            style={{
                gridArea: `day${props.frontBlanks.length + props.day}`
            }}
            key={props.day}
        >{props.day}

        </div>
    )

}