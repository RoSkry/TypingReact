import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './Button.css'

function Button(props) {
    return (
        <div className='wrapper'>
            {
                props.link
                    ? <Link to={props.link} > {props.text} </Link>
                    : <button className={props.color}>{props.text}</button>
            }
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['red', 'green']),
    link: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;
