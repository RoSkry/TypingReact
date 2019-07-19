import React from 'react';
import './Wrapper.css'
import Button from '../Button/Button'


function Wrapper(props) {

    return (
        <div className='wrapper'>
            <h1>{props.text}</h1>
            {props.children}
        </div>
    )
}

export default Wrapper;