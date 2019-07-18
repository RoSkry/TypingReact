import React from 'react';
import PropTypes from 'prop-types';
import './Input.css'

function Input(props) {
    return (
        <div>
            <input className={props.error ? "red" : ""} value={props.value} type={props.type} onChange={props.onChange} />
        </div>
    )
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['password', 'button', 'image']).isRequired,
    error: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Input;