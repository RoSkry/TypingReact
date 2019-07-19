import React from 'react';
import { Link } from "react-router-dom";
import Button from '../Button/Button';

function Navigation(props) {
    return (
        <React.Fragment>

            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>

            <Button color="green" link="/login" text="Log In" />
        </React.Fragment>
    )
}

export default Navigation;