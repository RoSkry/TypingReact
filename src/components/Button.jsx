import React from 'react';
import PropTypes from 'prop-types';


function Button(props) {
    return (
        <div className='wrapper'
        >
            {
                props.link  
                    ? <a href={props.link}>{props.link} </a>
                    : <button>{props.text}</button>
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

//Input type=string, value = string, error = boolean