import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from '../Button/Button';
import Cookies from "js-cookie";
import { ifExsistToken } from "../../redux/actions/authActions";
import history from '../../history';

function Navigation(props) {

    const logOut = () => {

        Cookies.remove("accessToken");
        props.ifExisistProp(!!Cookies.get('accessToken'));
        history.push('/');
    }

    return (
        <React.Fragment>

            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>

            {props.value ?
                <Button color="green" onClick={logOut} text="Log Out" />
                :
                <Button color="red" link="/login" text="Log In" />
            }
        </React.Fragment>
    )
}


const mapStateToProps = state => {
    return {
        value: state.authReducer.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        ifExisistProp: value => dispatch(ifExsistToken(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
